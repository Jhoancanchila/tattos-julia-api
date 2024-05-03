require("dotenv").config();

const config = {
  dbUser: process.env.DB_USER,
  dbPassword: process.env.DB_PASSWORD,
  dbHost: process.env.DB_HOST,
  dbName: process.env.DB_NAME,
  dbPort: process.env.DB_PORT,
  port:process.env.PORT ?? 3002,
  oauthGmailPass: process.env.OAUTH_PASS_GMAIL
}

module.exports = { config };