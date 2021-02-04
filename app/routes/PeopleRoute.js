module.exports = app => {
    const people = require("../services/PeopleService.js");
    var router = require("express").Router();
    router.get("/", people.findAll);
    router.get("/:id", people.findOne);
    app.use('/api/starwars/people', router);
}
