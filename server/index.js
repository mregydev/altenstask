const vechiles = require('./data.json')

const app = require('express')()

const http = require('http')

const socket = require('socket.io')

const server = http.createServer(app)

const io = socket(server)

server.listen(process.env.PORT || 8080,()=>console.log('server is listening'))

io.on('connection', function (socket) {


    socket.emit('UpdateVechiles', vechiles)

    setInterval(
        () => {

            for(let vehchile of vechiles)
            {
                vehchile.status=!vehchile.status
            }

            socket.emit('UpdateVechiles', vechiles)
        }
        , 30000)
})
