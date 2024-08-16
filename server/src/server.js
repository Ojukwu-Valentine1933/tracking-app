const http = require("http")
const app = require("./app")
const server = http.createServer(app)
const {PORT} = require("./config/dotEnv")
const mongooseConnection = require("./config/mongoose")



const startServer = () => {
    server.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`)
        console.log(mongooseConnection())
    })
}
startServer()