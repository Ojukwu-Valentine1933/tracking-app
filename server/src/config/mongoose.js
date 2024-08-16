const mongoose = require("mongoose")
const {MONGO_DB_URI} = require("../config/dotEnv");

const mongooseConnection = () => {
    mongoose.connect(MONGO_DB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then(() => {
        console.log("Connected to MongoDB")
    }).catch((error) => {
        console.log("Error connecting to MongoDB", error)
    })
}
module.exports = mongooseConnection
