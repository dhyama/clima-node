//Realizamos la importación de la libreria axios para poder hacer llamadas a servicios con respuesta mediante promesas 
//  (Es igual que la libreria request pero esta ultima funciona con callbacks )
const axios = require('axios');

/**
 * Función mediante la que vamos a obtener la longitud y la latitud de una ciudad pasada como parametro
 * @param {*} ubicacion 
 */
const getLugarLatLon = async(ubicacion) => { //Para utilizar el await necesitamos que la función sea async

    //Como la ciudad puede tener caracteres especiales, necesitamos hacer conversión para incluir en la url
    const encodeUrl = encodeURI(ubicacion);

    //Como la llamada al servicio requiere de incluir un header, necesitamos primero generar esa configuración
    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodeUrl}`,
        timeout: 1000,
        headers: { 'x-rapidapi-key': '926018c31bmsha93a5d72d683a9ap1dcd90jsnf8688bc43179' }
    })

    //Realizamos una llamada de tipo get al servicio y recuperamos los resultados mediante promesas
    // instance.get()
    //     .then(resp => {
    //         console.log(resp.data.Results[0]);
    //     })
    //     .catch(err => {
    //         console.log(`Error : ${ err}`);
    //     })

    //Realizamos una llamada de tipo get al servicio y recuperamos los resultados mediante promesas
    const resp = await instance.get();
    //Comprobamos si hemos obtenido resultados
    if (resp.data.Results.length === 0) {
        throw new Error(`No hay resultados para ${ubicacion}`);
    }

    //Guardamos los datos de la primera componente de la respuesta obtenida
    const data = resp.data.Results[0];
    //Creamos constantes para almacenar los datos que necesitamos
    const direccion = data.name;
    const lat = data.lat;
    const log = data.lon;

    //Devolvemos el objeto con el resultado
    return {
        direccion,
        lat,
        log
    }
}

/**
 * Hacemos públicas las siguientes funciones del módulo
 */
module.exports = {
    getLugarLatLon
}