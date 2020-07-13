const fs = require("fs");
const path = require("path");
const mockDatabase = require("./mockDatabase");

const {
  users,
  permissions,
  roles,
  userTypes,
  feeds,
  comments,
  languages,
  projects,
} = mockDatabase;
const data = JSON.stringify({
  users,
  permissions,
  roles,
  userTypes,
  feeds,
  comments,
  languages,
  projects,
});
const dbFilePath = path.join(__dirname, "db.json");
const hasDatabase = false; //fs.exists(dbFilePath);
if (!hasDatabase) {
  fs.writeFile(dbFilePath, data, function (err) {
    err ? console.log(err) : console.log("Mock DB created.");
  });
}
