module.exports = app => {
    const planet = require("../services/PlanetService.js");
    var router = require("express").Router();
    router.get("/", planet.findAll);
    router.get("/:id", planet.findOne);
    app.use('/api/starwars/planet', router);
}