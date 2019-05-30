const express = require("express");
const helmet = require("helmet");

const postsRouter = require("./posts/postRouter.js");
const userRouter = require('./users/userRouter.js');

const server = express();
server.use(express.json());
server.use(helmet());
server.use(logger);

server.use("/api/posts", postsRouter);
server.use('/api/users', userRouter);

server.get("/", (req, res) => {
  res.send(`<h4>Welcome to the Servers Blog :)</h4>`);
});

//custom middleware

function logger(req, res, next) {
  console.log(`
  [${new Date().toISOString()}] ${req.method} to ${req.url}`);
  next();
}

module.exports = server;
