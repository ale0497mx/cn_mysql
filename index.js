const express = require('express'); // Importa el módulo Express para utilizarlo en la aplicación.
const app = express(); // instanciamos  express
const port = 3008; // estse es puerto en el que el servidor escuchará las solicitudes. En este caso, el puerto es 3008.
const routes = require('./api/endPoint');


app.use('/', routes);

// app.get('/', (req, res) => { // Configuramos una ruta para manejar solicitudes GET en la raíz del servidor
//     res.send('Welcome'); //configurasmo el enpoint parara que aparsca 
// });


app.listen(port,() => {  // iniciamo el servidor y lo hace escuchar en el puerto especificado
    console.log(`Expample app listening on port ${port}`); 
});

/*este código establece un servidor web muy simple que responde con "Welcome"
cuando se accede a la raíz del servidor (/) y escucha en el puerto 3008.*/