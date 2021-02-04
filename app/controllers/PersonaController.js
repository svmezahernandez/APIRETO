const db = require("../models");
const Persona = db.personas;
const Op = db.Sequelize.Op;


exports.create = (req, res) => {
  if (!req.body) {
    res.status(400).send({
      message: "Contenido no puede estar vacío"
    });
    return;
  }


  const persona = {
    nombre: req.body.nombre,
    edad: req.body.edad,
    fechaNacimiento: req.body.fechaNacimiento
  };


  Persona.create(persona)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Error al crear Persona."
      });
    });
};

// Retrieve all Personas from the database.
exports.findAll = (req, res) => {
  const nombre = req.query.nombre;
  var condition = nombre ? { nombre: { [Op.like]: `%${nombre}%` } } : null;

  Persona.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Error al obtener personas."
      });
    });
};

// Find a single Persona with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Persona.findByPk(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error al obtener Persona con id=" + id
      });
    });
};

// Update a Persona by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Persona.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Persona ha sido actualizado satisfactoriamente."
        });
      } else {
        res.send({
          message: `No se puede actualizar Persona con id=${id}. Probablemente Persona no se encuentra or req.body está vacío!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error al actualizar Persona con id=" + id
      });
    });
};

// Delete a Persona with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Persona.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Persona fue eliminada satisfactoriamente"
        });
      } else {
        res.send({
          message: `No se puede eliminar Persona con id=${id}. Probablemente Persona no se encuentre`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "No se puede eliminar Persona con id=" + id
      });
    });
};

// Delete all Personas from the database.
exports.deleteAll = (req, res) => {
  Persona.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} Personas eliminadas satisfactoriamente!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Error al eliminar Personas."
      });
    });
};

