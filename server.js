"use strict"

const net = require('net')

class FabioServer{
	constructor(name, port){
		this.name = name
		this.server = new net.Server()
		console.log(`servidor ${this.name} criado`)
		this._registerEvents()
		this.server.listen({
			port: port
		}, () => {
			console.log("Servidor is Up and running!!")
		})

	}	 

	_registerEvents(){
		let oServer = this.server
		oServer.on('close', this.onClose);
		oServer.on('connection', this.onConnection.bind(this))
		oServer.on('error', this.onError)
		oServer.on('listening', this.onListening)
	}

	onClose(){
		console.log("Closing...")
	}

	onConnection(oSocket){
		console.log(`${this.name} new connection!!!`)
		let oAddress = oSocket.address()
		console.log(oAddress)
	}

	onError(oEvent){
		console.log("Error :-(")
	}

	onListening(){
		console.log("Listening...")
	}

	onFinished() {
		console.log("Servidor is Up and running!!")
	}

}

let oServer1 = new FabioServer("a", 8001)
let oServer2 = new FabioServer("b", 8002)	