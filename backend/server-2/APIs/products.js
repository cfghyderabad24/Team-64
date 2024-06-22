const exp = require("express");
const expAsyncHandler = require("express-async-handler");
const { getImage } = require("./imageFetch");
const productsApp = exp.Router();

const dummyObj = [
  {
    title: "Product1",
    price: 450,
    description: "A sustainable product useful for all!",
  },
  {
    title: "Product1",
    price: 450,
    description: "A sustainable product useful for all!",
  },
  {
    title: "Product1",
    price: 450,
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
