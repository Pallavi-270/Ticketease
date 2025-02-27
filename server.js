const express = require("express");
require("dotenv").config();
const connecttoDb = require("./src/config/db.config");
const authroutes=require("./src/routers/auth.routes");
const ticketroutes=require("./src/routers/ticket.router");
const logger=require("./src/middleware/logger.middleware")
const app = express();
const port = process.env.PORT || 3000;
// connecttoDb();
app.use(express.json());
app.use(logger);
app.use("/auth",authroutes);
app.use("/tickets",ticketroutes);
app.listen(port, () => {
    connecttoDb;
    console.log(`server is started ${port}`)
});