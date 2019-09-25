/**
 * Módulo mediante el que obtenemos el clima de una ciudad
 * API de obtención del clima -> https://home.openweathermap.org/api_keys
 */

//Realizamos la importación de la libreria axios para poder hacer llamadas a servicios con respuesta mediante promesas 
//  (Es igual que la libreria request pero esta ultima funciona con callbacks )
const axios = require('axios');

/**
 * Función mediante la que obtenemos los datos del clima de una ubicación pasada por coordenadas
 * @param {*} lat 
 * @param {*} lon 
 */
const getClima = async(lat, lon) => {

    //Obtenemos el resultado mediante una promesa
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=5b9662fe79a4892eebbde2adf70ae90b&units=metric`);

    //Devolvemos la temperatura 
    return resp.data.main.temp;
}

/**
 * Hacemos públicas las siguientes funciones del módulo
 */
module.exports = {
    getClima
}