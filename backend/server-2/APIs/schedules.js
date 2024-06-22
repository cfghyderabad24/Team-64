const exp = require("express");
const expAsyncHandler = require("express-async-handler");
const { getImage } = require("./imageFetch");
const schedulesApp = exp.Router();

const dummyObj = [
  {
    title: "Event1",
    date: "20-06-2024",
    description:
      "This was the best event of all time! This was the best event of all time! This was the best event of all time! This was the best event of all time!",
  },
  {
    title: "Event1",
    date: "20-06-2024",
    description:
      "This was the best event of all time! This was the best event of all time! This was the best event of all time! This was the best event of all time!",
  },
  {
    title: "Event1",
    date: "20-06-2024",
    description:
      "This was the best event of all time! This was the best event of all time! This was the best event of all time! This was the best event of all time!",
  },
];

const getAllEvents = expAsyncHandler(async (req, res) => {
  const eventsCollection = req.app.get("eventsCollection");
  const allEvents = await eventsCollection.find().toArray();
  return res.send({ status: 200, payload: dummyObj });
});

schedulesApp.get("/", getAllEvents);
schedulesApp.get("/img/:title", getImage);

module.exports = schedulesApp;
