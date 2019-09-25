/*******************************************************************
 * Aplicación de consola para la obtención del clima en una ciudad *
 *******************************************************************/

//Realizamos la importación de la configuracion de libreria para obtención de argumentos en linea de comandos.
const argv = require('./config/yargs').argv;

//Realizamos la importacion de la libreria para colorear la consola
const colors = require('colors/safe');

//Realizamos al importación del módulo con la lógica de negocio para obtención de los datos de la ubicación
const lugar = require('./lugar/lugar');

//Obtenemos la información de la ubicación pasada como parametro
lugar.getLugarLatLon(argv.direccion)
    .then(ubicacion => {
        console.log(colors.green(ubicacion));
    })
    .catch(err => {
        console.log(colors.red(err));
    });