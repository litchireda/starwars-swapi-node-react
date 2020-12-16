const fetch = require('node-fetch');

module.exports.getSingular = async (url) => {
    let data = await fetch(url);
    if (data.status === 404) {
        return null;
    }
    data = await data.json();
    data.id = data.url.split('/')[5];
    // Deconstructing the object to remove the unecessary bloating data in the object.
    // We just want the main part of it.
    const { characters, starships, species, vehicles, films, pilots, planets, ...dataObj } = data;
    return dataObj;
}

module.exports.getMultiple = async (urls) => {
    let newTab = [];
    for (let i = 0; i < urls.length; i++) {
        let data = await this.getSingular(urls[i]);
        if (data) newTab.push(data);
    }
    return newTab;
};

// module.exports.getFilm = async (url, full = true) => {
    
//     let data = await fetch(url);
//     data = await data.json();

//     return;
// }

// module.exports.getPlanet = async (url, full = true) => {
    
//     let data = await fetch(url);
//     data = await data.json();

//     return;
// }

// module.exports.getSpecie = async (url, full = true) => {
    
//     let data = await fetch(url);
//     data = await data.json();

//     return;
// }

// module.exports.getStarship = async (url, full = true) => {
    
//     let data = await fetch(url);
//     data = await data.json();

//     return;
// }

// module.exports.getVehicle = async (url, full = true) => {
    
//     let data = await fetch(url);
//     data = await data.json();

//     return;
// }