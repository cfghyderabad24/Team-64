const exp = require("express");
const expAsyncHandler = require("express-async-handler");
const { getImage } = require("./imageFetch");
const schedulesApp = exp.Router();

const getAllEvents = expAsyncHandler(async (req, res) => {
  const eventsCollection = req.app.get("eventsCollection");
  const allEvents = await eventsCollection.find().toArray();
  return res.send({ status: 200, payload: allEvents });
});

schedulesApp.get("/", getAllEvents);
schedulesApp.get("/img/:title", getImage);

module.exports = schedulesApp;
