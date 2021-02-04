const fetch = require('node-fetch');
var uri = "https://swapi.py4e.com/api/films/";
exports.findAll = (req, res) => {     
    let lista = new Array();
    try{
        fetch(uri)
        .then(res => res.json())
        .then(json => {
            json.results.forEach(item => {
                lista.push({
                    titulo:item.title,
                    id_episodio: item.episode_id,
                    apertura: item.opening_crawl,
                    director: item.director,
                    productor: item.producer,
                    fecha_lanzamiento: item.release_date,
                    personajes:item.characters,
                    planetas: item.planets,
                    naves: item.starships,
                    vehiculos: item.vehicles,
                    peliculas: item.species,
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
                titulo:json.title,
                id_episodio: json.episode_id,
                apertura: json.opening_crawl,
                director: json.director,
                productor: json.producer,
                fecha_lanzamiento: json.release_date,
                personajes:json.characters,
                planetas: json.planets,
                naves: json.starships,
                vehiculos: json.vehicles,
                peliculas: json.species,
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
