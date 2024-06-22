const exp = require("express");
const mongodb = require("mongodb");
const productsApp = require("./APIs/products");
require("dotenv").config();
const cors = require("cors");
const schedulesApp = require("./APIs/schedules");
const contactUsApp = require("./APIs/contactUs");
const app = exp();
app.use(exp.json());
app.use(cors());
const port = process.env.PORT;

const mongoClient = mongodb.MongoClient;
mongoClient
  .connect(process.env.DB_URI)
  .then((client) => {
    const obj = client.db("gooduniversedb");
    const productsCollection = obj.collection("products");
    const eventsCollection = obj.collection("events");
    const userQueryCollection = obj.collection("userQuery");
    const orgQueryCollection = obj.collection("orgQuery");
    app.set("productsCollection", productsCollection);
    app.set("eventsCollection", eventsCollection);
    app.set("userQueryCollection", userQueryCollection);
    app.set("orgQueryCollection", orgQueryCollection);
    console.log("DB Connected!");
  })
  .catch((err) => {
    console.log(err);
  });

app.use("/products", productsApp);
app.use("/events", schedulesApp);
app.use("/contact", contactUsApp);

app.listen(port, "0.0.0.0", () => console.log(`Running on port ${port}`));
