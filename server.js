const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

var corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const db = require("./app/models");
db.sequelize.sync();

app.get("/", (req, res) => {
  res.json({ message: "Hola Mundo" });
});

require("./app/routes/PersonaRoute")(app);
require("./app/routes/PeopleRoute")(app);
require("./app/routes/PlanetRoute")(app);
require("./app/routes/FilmRoute")(app);
require("./app/routes/StarshipRoute")(app);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});