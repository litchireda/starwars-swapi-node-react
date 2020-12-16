const fetch = require('node-fetch');
const factory = require('../factory/factory');

const toSearchTab = [
    'people',
    'films',
    'planets',
    'vehicles',
    'starships',
    'species'
];

module.exports.searchData = async (request, h) => {
    const { toSearch } = request.params;
    const { search, page } = request.query;

    let url = `https://swapi.dev/api/${toSearch}/`;

    if (!toSearchTab.includes(toSearch)) {
        return h.response('').code(400);
    }
    if (search && !page) {
        url += `?search=${search}`;
    } else if (search && page) {
        url += `?search=${search}&page=${page}`;
    } else if (!search && page) {
        url += `?page=${page}`; 
    }
    let data = await fetch(url);
    data = await data.json();
    let results = data.results;
    for (let i = 0; i < results.length; i++) {
        //get id from URL
        results[i].id = results[i].url.split('/')[5];
    }
    return h.response(data).code(200);
};

module.exports.getAll = async (request, h) => {
    const { toSearch } = request.params;

    if (!toSearchTab.includes(toSearch)) {
        return h.response('').code(400);
    }

    let url = `https://swapi.dev/api/${toSearch}/`;
    if (request.query.page) {
        url += `?page=${request.query.page}`; 
    }
    let data = await fetch(url);
    data = await data.json();
    let results = data.results;
    for (let i = 0; i < results.length; i++) {
        //get id from URL
        results[i].id = results[i].url.split('/')[5];
    }
    return h.response(data).code(200);
}

module.exports.getPeople = async (request, h) => {
    if (!request.params.id) {
        return h.response({ error: 'Please fill out the search bar' }).code(400);
    }
    
    const { id } = request.params;

    let people = await fetch(`https://swapi.dev/api/people/${id}`);
    if (people.status === 404) {
        return h.response('').code(404);
    }
    people = await people.json();

     //get id from URL
     people.id = people.url.split('/')[5];

     //get homeworld
     let homeworld = await factory.getSingular(people.homeworld);
     people.homeworld = homeworld;

     // Possibilité de refacto ce code en Bouclant sur les clés d'obj  
     // et les utiliser en param pour appeler la fonction dans une boucle 
     // mais cela rendrait le code bien moins lisible

     //get films
     let films =  await factory.getMultiple(people.films);
     people.films = films;

     //get species
     let species = await factory.getMultiple(people.species);
     people.species = species;

     //get vehicles
     let vehicles = await factory.getMultiple(people.vehicles);
     people.vehicles = vehicles;

     //get starships
     let starships = await factory.getMultiple(people.starships);
     people.starships = starships;

    return h.response(people).code(200);
}

module.exports.getFilm = async (request, h) => {
    if (!request.params.id) {
        return h.response({ error: 'Please fill out the search bar' }).code(400);
    }
    
    const { id } = request.params;

    let film = await fetch(`https://swapi.dev/api/films/${id}`);
    if (film.status === 404) {
        return h.response('').code(404);
    }
    film = await film.json();

    //get id from URL
    film.id = film.url.split('/')[5];

    // Possibilité de refacto ce code en Bouclant sur les clés d'obj  
    // et les utiliser en param pour appeler la fonction dans une boucle 
    // mais cela rendrait le code bien moins lisible

    //get characters
    let characters = await factory.getMultiple(film.characters);
    film.characters = characters;

    //get planets
    let planets = await factory.getMultiple(film.planets);
    film.planets = planets;

    //get species
    let species = await factory.getMultiple(film.species);
    film.species = species;

    //get vehicles
    let vehicles = await factory.getMultiple(film.vehicles);
    film.vehicles = vehicles;

    //get starships
    let starships = await factory.getMultiple(film.starships);
    film.starships = starships;

    return h.response(film).code(200);
}

module.exports.getPlanet = async (request, h) => {
    if (!request.params.id) {
        return h.response({ error: 'Please fill out the search bar' }).code(400);
    }
    
    const { id } = request.params;
    let planet = await fetch(`https://swapi.dev/api/planets/${id}`);
    if (planet.status === 404) {
        return h.response('').code(404);
    }
    planet = await planet.json();
    
    //get id from URL
    planet.id = planet.url.split('/')[5];

    // Possibilité de refacto ce code en Bouclant sur les clés d'obj  
    // et les utiliser en param pour appeler la fonction dans une boucle 
    // mais cela rendrait le code bien moins lisible

    //get residents
    let residents = await factory.getMultiple(planet.residents);
    planet.residents = residents;
    

    //get films
    let films =  await factory.getMultiple(planet.films);
    planet.films = films;
    return h.response(planet).code(200); 
}

module.exports.getSpecies = async (request, h) => {
    if (!request.params.id) {
        return h.response({ error: 'Please fill out the search bar' }).code(400);
    }
    
    const { id } = request.params;
    let species = await fetch(`https://swapi.dev/api/species/${id}`);
    if (species.status === 404) {
        return h.response('').code(404);
    }
    species = await species.json();
    
    //get id from URL
    species.id = species.url.split('/')[5];
    
    // Possibilité de refacto ce code en Bouclant sur les clés d'obj  
    // et les utiliser en param pour appeler la fonction dans une boucle 
    // mais cela rendrait le code bien moins lisible

    let homeworld = await factory.getSingular(species.homeworld);
    species.homeworld = homeworld;

    //get residents
    let people = await factory.getMultiple(species.people);
    species.people = people;
    

    //get films
    let films =  await factory.getMultiple(species.films);
    species.films = films;
    return h.response(species).code(200); 
}

module.exports.getStarship = async (request, h) => {
    if (!request.params.id) {
        return h.response({ error: 'Please fill out the search bar' }).code(400);
    }
    
    const { id } = request.params;
    let starship = await fetch(`https://swapi.dev/api/starships/${id}`);
    if (starship.status === 404) {
        return h.response('').code(404);
    }
    starship = await starship.json();
    
    //get id from URL
    starship.id = starship.url.split('/')[5];
    
    // Possibilité de refacto ce code en Bouclant sur les clés d'obj  
    // et les utiliser en param pour appeler la fonction dans une boucle 
    // mais cela rendrait le code bien moins lisible

    //get residents
    let pilots = await factory.getMultiple(starship.pilots);
    starship.pilots = pilots;
    

    //get films
    let films =  await factory.getMultiple(starship.films);
    starship.films = films;
    return h.response(starship).code(200); 
}

module.exports.getVehicle = async (request, h) => {
    if (!request.params.id) {
        return h.response({ error: 'Please fill out the search bar' }).code(400);
    }
    
    const { id } = request.params;
    let vehicle = await fetch(`https://swapi.dev/api/vehicles/${id}`);
    if (vehicle.status === 404) {
        return h.response('').code(404);
    }
    vehicle = await vehicle.json();
    
    //get id from URL
    vehicle.id = vehicle.url.split('/')[5];
    
    // Possibilité de refacto ce code en Bouclant sur les clés d'obj  
    // et les utiliser en param pour appeler la fonction dans une boucle 
    // mais cela rendrait le code bien moins lisible

    //get residents
    let pilots = await factory.getMultiple(vehicle.pilots);
    vehicle.pilots = pilots;
    

    //get films
    let films =  await factory.getMultiple(vehicle.films);
    vehicle.films = films;
    return h.response(vehicle).code(200); 
}