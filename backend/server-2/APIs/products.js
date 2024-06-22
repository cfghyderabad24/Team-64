const exp = require("express");
const expAsyncHandler = require("express-async-handler");
const { getImage } = require("./imageFetch");
const productsApp = exp.Router();

const dummyObj = [
  {
    title: "Product1",
    price: "₹450.00",
    description: "A sustainable product useful for all!",
  },
  {
    title: "Product1",
    price: "₹450.00",
    description: "A sustainable product useful for all!",
  },
  {
    title: "Product1",
    price: "₹450.00",
    description: "A sustainable product useful for all!",
  },
];

const getAllProducts = expAsyncHandler(async (req, res) => {
  const productsCollection = req.app.get("productsCollection");
  const allProducts = await productsCollection.find().toArray();
  return res.send({ status: 200, payload: dummyObj });
});

productsApp.get("/", getAllProducts);
productsApp.get("/img/:title", getImage);

module.exports = productsApp;
