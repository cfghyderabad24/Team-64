const exp = require("express");
const expAsyncHandler = require("express-async-handler");
const { getImage } = require("./imageFetch");
const productsApp = exp.Router();

const dummyObj = [
  {
    title: "Pads",
    price: 600,
    description: "A sustainable product useful for all!",
  },
  {
    title: "Cups",
    price: 650,
    description: "A sustainable product useful for all!",
  },
  {
    title: "Membership for a girl",
    price: 900,
    description: "A sustainable product useful for all!",
  },
];

const getAllProducts = expAsyncHandler(async (req, res) => {
  const productsCollection = req.app.get("productsCollection");
  const allProducts = await productsCollection.find().toArray();
  return res.send({ status: 200, payload: dummyObj });
});

const getProductInfo = expAsyncHandler(async (req, res) => {
  const name = req.params.title;
  const productsCollection = req.app.get("productsCollection");
  const product = await productsCollection.findOne({ title: name });
  if (product) {
    return res.send({ status: 200, payload: product });
  }
  return res.status(404).send({ message: "Not Found!" });
});

productsApp.get("/", getAllProducts);
productsApp.get("/img/:title", getImage);
productsApp.get("/:title", getProductInfo);

module.exports = productsApp;
