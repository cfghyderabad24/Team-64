const exp = require("express");
const expAsyncHandler = require("express-async-handler");
const { getImage } = require("./imageFetch");
const schedulesApp = exp.Router();

const dummyObj = [
  {
    title: "MeninMenstruation",
    date: "June 15, 2024",
    description:
      "MeninMenstruation is a social media campaign that aims to break the stigma surrounding",
  },
  {
    title: "kusheecup",
    date: "December 16, 2023",
    description:
      "A reflection of strength and unity as these remarkable women proudly hold the menstrual cups donated through our collaboration with Kushee Cups @kusheecup.",
  },
  {
    title: "HormonalHarmony",
    date: "September 30, 2023",
    description:
      "Despite being one of the most common conditions in the world, PCOS is often misdiagnosed. As this PCOS awareness month draws to a close, we would like to emphasize that the advocacy of the disease everyday matters a lot!",
  },
  {
    title: "Activepcos",
    date: "September 29, 2023",
    description:
      "One of the simplest ways to combat PCOS is through physical activity, practicing these simple asanas regularly can be a great start to incorporate lifestyle changes that can have a huge impact on your hormone health.",
  },
  {
    title: "ProjectE3",
    date: "October 13, 2022",
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
