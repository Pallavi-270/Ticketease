const express = require("express");
require("dotenv").config();
const connecttoDb = require("./src/config/db.config");
const app = express();
const port = process.env.PORT || 3000;
// connecttoDb();
app.listen(port, () => {
    connecttoDb;
    console.log(`server is started ${port}`)
});