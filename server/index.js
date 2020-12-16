'use strict';

const Hapi = require('@hapi/hapi');
const controller = require('./controllers/controller');

const init = async () => {

    //Server Init
    const server = Hapi.server({
        port: 3001,
        host: 'localhost',
        routes: {cors: true}
    });

    //Routes
    server.route({
        method: 'GET',
        path: '/{toSearch}',
        handler: controller.searchData
    });
    
    server.route({
        method: 'GET',
        path: '/people/{id}',
        handler: controller.getPeople
    });

    server.route({
        method: 'GET',
        path: '/films/{id}',
        handler: controller.getFilm
    });

    server.route({
        method: 'GET',
        path: '/planets/{id}',
        handler: controller.getPlanet
    });

    server.route({
        method: 'GET',
        path: '/species/{id}',
        handler: controller.getSpecies
    });

    server.route({
        method: 'GET',
        path: '/starships/{id}',
        handler: controller.getStarship
    });
    
    server.route({
        method: 'GET',
        path: '/vehicles/{id}',
        handler: controller.getVehicle
    });

    await server.start();
    console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {

    console.log(err);
    process.exit(1);
});

init();