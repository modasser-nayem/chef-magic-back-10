const express = require("express");
const cors = require("cors");
const app = express();

// data
const chefs = require("./data/chefs.json");
const recipes = require("./data/recipes.json");
const dishes = require("./data/dishes.json");

app.use(cors({ origin: "https://chefs-magic.web.app/" }));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
   res.send("<h1>Chef's Magic Server is Running...</h1>");
});

app.get("/chefs", (req, res) => {
   res.json(chefs);
});

app.get("/chefs/:id", (req, res) => {
   const { id } = req.params;
   const chef = chefs.find((chef) => chef._id === id);
   const chefRecipes = recipes.filter((recipe) => recipe.author === id);
   res.json({
      chef,
      chefRecipes,
   });
});

app.get("/dishes", (req, res) => {
   res.json(dishes);
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
   console.log(`SERVER IS RUNNING AT  http://localhost:${port}`);
});
