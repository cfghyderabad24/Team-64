const exp = require("express");
const expAsyncHandler = require("express-async-handler");
const contactUsApp = exp.Router();

const postUserQuery = expAsyncHandler(async (req, res) => {
  const userQueryCollection = req.app.get("userQueryCollection");
  const dataIn = req.body;
  //   await userQueryCollection.insertOne(dataIn);
  return res.status(200).send({ message: "Query Received!" });
});

const postOrgQuery = expAsyncHandler(async (req, res) => {
  const orgQueryCollection = req.app.get("orgQueryCollection");
  const dataIn = req.body;
  //   await orgQueryCollection.insertOne(dataIn);
  return res.status(200).send({ message: "Query Received!" });
});

contactUsApp.post("/user", postUserQuery);
contactUsApp.post("/org", postOrgQuery);

module.exports = contactUsApp;
