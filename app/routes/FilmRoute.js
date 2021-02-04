module.exports = app => {
    const film = require("../services/FilmService.js");
    var router = require("express").Router();
    router.get("/", film.findAll);
    router.get("/:id", film.findOne);
    app.use('/api/starwars/film', router);
}