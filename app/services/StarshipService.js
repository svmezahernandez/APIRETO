const fetch = require('node-fetch');
var uri = "https://swapi.py4e.com/api/starships/";
exports.findAll = (req, res) => {     
    let lista = new Array();
    try{
        fetch(uri)
        .then(res => res.json())
        .then(json => {
            json.results.forEach(item => {
                lista.push({
                    nombre:item.name,
                    modelo: item.model,
                    fabricante: item.manufacturer,
                    costo_credito: item.cost_in_credits,
                    longitud: item.length,
                    velocidad_maxima_atmosfera: item.max_atmosphering_speed,
                    tripulacion:item.crew,
                    pasajeros: item.passengers,
                    capacidad_cargo: item.cargo_capacity,
                    consumibles: item.consumables,
                    calificacion_hiperimpulsor: item.hyperdrive_rating,
                    mglt:item.MGLT,
                    clase_nave: item.starship_class,
                    pilotos: item.pilots,
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
                modelo: json.model,
                fabricante: json.manufacturer,
                costo_credito: json.cost_in_credits,
                longitud: json.length,
                velocidad_maxima_atmosfera: json.max_atmosphering_speed,
                tripulacion:json.crew,
                pasajeros: json.passengers,
                capacidad_cargo: json.cargo_capacity,
                consumibles: json.consumables,
                calificacion_hiperimpulsor: json.hyperdrive_rating,
                mglt:json.MGLT,
                clase_nave: json.starship_class,
                pilotos: json.pilots,
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