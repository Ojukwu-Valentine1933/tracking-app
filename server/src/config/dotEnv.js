const dotEnv = require("dotenv")
dotEnv.config()


module.exports = {
    PORT: process.env.PORT,
    MONGO_DB_URI: process.env.MONGO_DB_URI,
    GOOGLE_OAUTH_ACCESS_TOKEN: process.env.GOOGLE_OAUTH_ACCESS_TOKEN,
    GOOGLE_OAUTH_REFRESH_TOKEN: process.env.GOOGLE_OAUTH_REFRESH_TOKEN,
    GOOGLE_OAUTH_CLIENT_ID: process.env.GOOGLE_OAUTH_CLIENT_ID,
    GOOGLE_OAUTH_CLIENT_SECRET: process.env.GOOGLE_OAUTH_CLIENT_SECRET,
    USER_EMAIL: process.env.USER_EMAIL,
    APP_PASS_CODE: process.env.APP_PASS_CODE
}