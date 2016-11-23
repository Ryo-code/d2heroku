const pg = require("pg");
const settings = require("./settings"); // refers to settings.json
const person = process.argv[2]

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
  console.log("Searching ...");


  let string = `SELECT * FROM famous_people
                WHERE last_name = $1 OR first_name = $1`;
  //since "person" is this argv array below, you can access it with "$1", as seen above (so hypothetically, you could make another item in the array and access it with $2)
  client.query(string, [person], (err, result) => {

    if (err) {
      return console.error("error running query", err);
    }
    // console.log("RESULT.ROWS: ", result.rows);

    const id = result.rows[0].id;
    const firstName = result.rows[0].first_name;
    const lastName = result.rows[0].last_name;

    const birthdate = result.rows[0].birthdate;
    const birthday = `${birthdate.getFullYear()}-${birthdate.getMonth() +1}-${birthdate.getDate()}`;
    const FullSentence = `- ${id}: ${firstName} ${lastName}, born '${birthday}'`
    console.log(FullSentence);

    // console.log(result.rows); //output: 1
    client.end();
  });
});
