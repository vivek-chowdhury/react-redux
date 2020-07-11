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
});

// Set default middlewares (logger, static, cors and no-cache)
server.use(middlewares);

// To handle POST, PUT and PATCH you need to use a body-parser. Using JSON Server's bodyParser
server.use(jsonServer.bodyParser);

// Simulate delay on all requests
server.use(function (req, res, next) {
  setTimeout(next, 0);
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

server.post("/users/", function (req, res, next) {
  const error = validateUser(req.body);
  if (error) {
    res.status(400).send(error);
  } else {
    next();
  }
});

// Use default router
server.use(router);

// Start server
const port = 3001;
server.listen(port, () => {
  console.log(`JSON Server is running on port ${port}`);
});

function validateUser(user) {
  if (!user.userId) return "User id is required.";
  if (!user.passwore) return "Password is required.";
  if (!user.email) return "Email id is required.";
  return "";
}
