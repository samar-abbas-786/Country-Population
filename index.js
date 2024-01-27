const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const Country = require("./Country_Json_Details.json");
const path = require("path");

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//viewEngine

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

app.post("/getDetails", async (req, res) => {
  const { country } = req.body;
  const countryDetails = Country.find((c) => c.country === country);
  if (!countryDetails) {
    return res.status(404).json({ message: "No country is Avalaible" });
  } else {
    res.json(countryDetails);
  }
});

app.listen(PORT, () => {
  console.log(`App is running at ${PORT}`);
});
