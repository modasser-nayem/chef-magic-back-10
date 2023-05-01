const express = require("express");
const cors = require("cors");
const app = express();

// data

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
   res.send("<h1>Chef's Magic Server is Running...</h1>");
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
   console.log(`SERVER IS RUNNING AT  http://localhost:${port}`);
});
