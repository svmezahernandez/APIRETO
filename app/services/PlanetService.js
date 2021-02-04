const fetch = require('node-fetch');
var uri = "https://swapi.py4e.com/api/planets/";
exports.findAll = (req, res) => {     
    let lista = new Array();
    try{
        fetch(uri)
        .then(res => res.json())
        .then(json => {
            json.results.forEach(item => {
                lista.push({
                    nombre:item.name,
                    periodo_rotacion: item.rotation_period,
                    periodo_orbita: item.orbital_period,
                    diametro: item.diameter,
                    clima: item.climate,
                    gravedad: item.gravity,
                    suelo:item.terrain,
                    superficie_agua: item.surface_water,
                    poblacion: item.population,
                    residentes: item.residents,
                    peliculas: item.films,
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
                periodo_rotacion: json.rotation_period,
                periodo_orbita: json.orbital_period,
                diametro: json.diameter,
                clima: json.climate,
                gravedad: json.gravity,
                suelo:json.terrain,
                superficie_agua: json.surface_water,
                poblacion: json.population,
                residentes: json.residents,
                peliculas: json.films,
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