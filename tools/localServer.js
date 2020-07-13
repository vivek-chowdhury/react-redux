const jsonServer = require("json-server");
const server = jsonServer.create();
const path = require("path");
const dbPath = path.join(__dirname, "db.json");
const router = jsonServer.router(dbPath);

console.log("Database created at : ", dbPath);

// Can pass a limited number of options to this to override (some) defaults. See https://github.com/typicode/json-server#api
// const middlewares = jsonServer.defaults();
const middlewares = jsonServer.defaults({
  // Display json-server's built in homepage when json-server starts.
  static: "./node_modules/json-server/public",
  noCors: false,
});

// Set default middlewares (logger, static, cors and no-cache)
server.use(middlewares);

// To handle POST, PUT and PATCH you need to use a body-parser. Using JSON Server's bodyParser
server.use(jsonServer.bodyParser);

// server.use(
//   jsonServer.rewriter({
//     "/users/:id": "/users?id:=id",
//   })
// );

// Simulate delay on all requests
server.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");

  if (req.headers["access-control-request-method"]) {
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, OPTIONS");
  }
  if (req.headers["access-control-request-headers"]) {
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
  }

  res.header("Access-Control-Max-Age", 60 * 60 * 24 * 365);

  if (req.method === "OPTIONS") {
    res.sendStatus(200);
  } else {
    setTimeout(next, 1000);
  }
});

// Add createdAt to all POSTS
server.use((req, res, next) => {
  if (req.method === "POST") {
    req.body.createdAt = Date.now();
  }
  // Continue to JSON Server router
  if (!res.locals.data) {
    res.status(404);
    res.locals.data = {};
  }
  next();
});

server.put("/users/:id", function (req, res, next) {
  const params = req.params;
  const users = router.db.getState().users;
  const match = isUserIdUnique(users, params.id);
  if (match && match.length > 0) {
    res.status(200);
    next();
  } else {
    const error = { status: 404, message: "Invalid user id" };
    res.status(200).send(error);
  }
});

server.post("/users/", function (req, res, next) {
  const error = validateUser(req.body);
  if (error) {
    res.status(400).send(error);
  } else {
    const body = req.body;
    const users = router.db.getState().users;
    const match = isUserIdUnique(users, body.id);
    if (match && match.length > 0) {
      const error = {
        status: 409,
        error:
          "Duplicate user, user id mentioned in the request already exist !",
      };
      res.status(200).send(error);
    } else {
      next();
    }
  }
});

server.get("/login/", function (req, res, next) {
  const query = req.query;
  const users = router.db.getState().users;
  let match;
  if (users) {
    match = users.filter((u) => {
      return u.id === query.userid && u.password === query.password;
    });
    if (match && match.length > 0) {
      res.status(200).send(match[0]);
    }
  }
  if (!match || match.length === 0) {
    const error = { errorCode: 401, error: "No record found" };
    res.status(401).send(error);
  }
  // next();
});

server.get("/login/validateUserId/", function (req, res, next) {
  const query = req.query;
  const users = router.db.getState().users;
  let match = isUserIdUnique(users, query.userid);
  if (!match || match.length === 0) {
    const message = { message: "No match found" };
    res.status(200).send(message);
  } else {
    const error = { errorCode: 401, error: "User id already exist" };
    res.status(401).send(error);
  }
});

// Use default router
server.use(router);

// Start server
const port = 3001;
server.listen(port, () => {
  console.log(`JSON Server is running on port ${port}`);
});

function isUserIdUnique(users, userid) {
  let match;
  if (users) {
    match = users.filter((u) => {
      return u.id === userid;
    });
  }
  return match;
}

function validateUser(user) {
  if (!user.id) return "User id is required.";
  if (!user.password) return "Password is required.";
  if (!user.emailId) return "Email id is required.";
  return "";
}
