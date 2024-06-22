const exp = require("express");
require("dotenv").config();
const app = exp();
const port = process.env.PORT;
app.listen(port, () => console.log(`Running on port ${port}`));