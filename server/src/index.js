const { port, db } = require('./config')

const startServer = async () => {
    app.listen(port, () => {
        console.log(`Started server on
            port: ${port}`)
        console.log(`Our database is ${db}`)
    })
}

connectDb()
    .on('error', console.log)
    .on('disconnected', connectDb)
    .once('open', startServer)
