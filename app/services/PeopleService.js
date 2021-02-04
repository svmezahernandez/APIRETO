const fetch = require('node-fetch');
var uri = "https://swapi.py4e.com/api/people/";
exports.findAll = (req, res) => {    
    let lista = new Array();
    try{
        fetch(uri)
        .then(res => res.json())
        .then(json => {
            json.results.forEach(item => {
                lista.push({
                    nombre:item.name,
                    estatura: item.height,
                    masa: item.mass,
                    color_pelo: item.hair_color,
                    color_piel: item.skin_color,
                    color_ojo: item.eye_color,
                    fecha_nacimiento:item.birth_year,
                    sexo: item.gender,
                    peliculas: item.films,
                    especies: item.species,
                    vehiculos: item.vehicles,
                    aviones: item.starships,
                    creado: item.created,
                    editado: item.edited,
                    enlace: item.url
                });
            })
            res.send(lista);    
        });
       
    }catch (error) {
        res.send(error);
    }
 
};

exports.findOne = (req, res) => { 
    const id = req.params.id;
    uri = uri + id;
    try{
        fetch(uri)
        .then(res => res.json())
        .then(json => {
            var objeto = {
                nombre:json.name,
                estatura: json.height,
                masa: json.mass,
                color_pelo: json.hair_color,
                color_piel: json.skin_color,
                color_ojo: json.eye_color,
                fecha_nacimiento:json.birth_year,
                sexo: json.gender,
                peliculas: json.films,
                especies: json.species,
                vehiculos: json.vehicles,
                aviones: json.starships,
                creado: json.created,
                editado: json.edited,
                enlace: json.url     
            };
            res.send(objeto)
        })
    }catch (error) {
        res.send(error);
    }
};