//access HEROKU's "famous_people" table
const person = process.argv[2]

const pg = require("pg");
const settings = require("./settings"); // settings.json

const client = new pg.Client({
  user     : settings.user,
  password : settings.password,
  database : settings.database,
  host     : settings.hostname,
  port     : settings.port,
  ssl      : settings.ssl
});

client.connect((err) => {
  if (err) {
    return console.error("Connection Error", err);
  }
  let string = `SELECT * FROM famous_people
  WHERE last_name = $1 OR first_name = $1`
  //since "person" is this argv array below, you can access it with "$1", as seen above (so hypothetically, you could make another item in the array and access it with $2)
  client.query(string, [person], (err, result) => {
    if (err) {
      return console.error("error running query", err);
    }
    console.log(result.rows); //output: 1
    client.end();
  });
});
