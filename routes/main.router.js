const express = require("express");
const userRouter = require("./user.router");
const repoRouter = require("./repo.router");
const issueRouter = require("./issue.router");

const mainRouter = express.Router();

// Routers with base paths
mainRouter.use("/user", userRouter);
mainRouter.use("/repo", repoRouter);
mainRouter.use("/issue", issueRouter);

// Root route
mainRouter.get("/", (req, res) => {
  res.send("Welcome");
});

module.exports = mainRouter;
