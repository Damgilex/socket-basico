// Funciones que queremos que se disparen cuando mandemos informacion al servidor
var socket = io();//io viene de la libreria de socket

socket.on('connect', function(){//'on' son para escuchar informacion
    console.log('conectado al servidor');
})

// Cuando perdemos comunicacion con el server
socket.on('disconnect',function(){//'on' son para escuchar informacion
    console.log('Perdimos conexión con el servidor');
} )

//Enviando información
// Siempre que se quiera hacer comunicacion del clinete con el servidor usaremos socket
socket.emit('enviarMensaje',{//'emit' es para mandar información.
    //usuario:'Alejandro', 
    mensaje:'Hola Mundo'
},function(resp){//Se ejecuta cuando todo salga bien
    console.log('respuesta server: ',resp);
}); 

//Escuchar información que envio el servidor
socket.on('enviarMensaje',function(mensaje){
    console.log('Servidor: ', mensaje);
})
