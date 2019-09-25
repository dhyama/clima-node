/*******************************************************************
 * Aplicación de consola para la obtención del clima en una ciudad *
 *******************************************************************/

//Realizamos la importación de la configuracion de libreria para obtención de argumentos en linea de comandos.
const argv = require('./config/yargs').argv;
//Realizamos la importacion de la libreria para colorear la consola
const colors = require('colors');

//Realizamos la importación del módulo con la lógica de negocio para la obtención de los datos de la ubicación.
const lugar = require('./lugar/lugar');
//Realizamos la importación del módulo con la lógica de negocio para la obtención de los datos de temperatura.
const clima = require('./clima/clima');

//Obtenemos la información de la ubicación pasada como parametro
// lugar.getLugarLatLon("Naquera Spain") //(argv.direccion)
//     .then(ubicacion => {
//         console.log(colors.green(ubicacion));
//     })
//     .catch(err => {
//         console.log(colors.red(err));
//     });

// //Obtenemos la información de la ubicación pasada como parametro
// clima.getClima(39.650002, -0.420000)
//     .then(temperatura => {
//         console.log(colors.green(temperatura));
//     })
//     .catch(err => {
//         console.log(colors.red(err));
//     });

// /**
//  * Función mediante obtenemos la temperatura de una ciudad
//  * @param {*} ciudad 
//  */
const getInfo = async(ciudad) => {

    try {
        const locCiudad = await lugar.getLugarLatLon(ciudad);
        const temperatura = await clima.getClima(locCiudad.lat, locCiudad.log);
        return `La temperatura de ${argv.direccion} es de ${temperatura}`.blue;
    } catch (err) {
        return `No se pudo determinar la temperatura para la ciudad ${argv.direccion}`.red
    }
}

getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log);