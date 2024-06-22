const expAsyncHandler = require("express-async-handler");
const fs = require("fs");

const getImage = expAsyncHandler(async (req, res) => {
  const title = req.params.title;
  const filePath = "../assets/images/" + title + ".jpg";
  fs.readFile(filePath, (err, data) => {
    if (err) {
      return res.status(500);
    }
    let contentType = "/image/jpeg";

    res.setHeader("Content-Type", contentType);
    res.send(data);
  });
});

module.exports = { getImage };
