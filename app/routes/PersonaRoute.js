module.exports = app => {
  const persona = require("../controllers/PersonaController.js");

  var router = require("express").Router();
  router.post("/", persona.create);
  router.get("/", persona.findAll);
  router.get("/:id", persona.findOne);
  router.put("/:id", persona.update);
  router.delete("/:id", persona.delete);
  router.delete("/", persona.deleteAll);  
  app.use('/api/persona', router);
};