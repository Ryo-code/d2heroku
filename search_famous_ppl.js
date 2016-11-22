const knex = require("knex");

const settings = require("./settings"); // settings.json
const person = process.argv[2]

const client = new knex.Client({
  user     : settings.user,
  password : settings.password,
  database : settings.database,
  host     : settings.hostname,
  port     : settings.port,
  ssl      : settings.ssl
});
