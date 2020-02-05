const {io} = require('../server');

io.on('connection', (client)=>{//client contiene la informacion del cliente(computadora) que se conecto
    console.log('Usuario conectado');

    client.emit('enviarMensaje',{//emitir mensaje para que el cliente escuche
        usuario:'Administrador',
        mensaje:'Bienvenido a esta aplicación'
    }); 

    client.on('disconnect',()=>{//Si el usuario se desconecta, por ejemplo si se cierra el navegador
        console.log('usuario desconectado');
    });

    client.on('enviarMensaje',(mensaje, callback)=>{
        
        console.log(mensaje);

        client.broadcast.emit('enviarMensaje',mensaje);//Broadcast es para que todos los clientes reciban el mensaje

            // if(mensaje.usuario){//Verifica si el objeto mensaj contiene un campo usuario
            //     callback({
            //         resp: 'Todo salio bien'
            //     });
            // }else{
            //     callback({
            //         resp: 'Todo salio mal'
            //     });
            // }

    });
});