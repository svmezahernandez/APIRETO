module.exports = app => {
    const starship = require("../services/StarshipService.js");
    var router = require("express").Router();
    router.get("/", starship.findAll);
    router.get("/:id", starship.findOne);
    app.use('/api/starwars/starship', router);
}