'use strict';

const settings = require("./knexfile");
const knex = require("knex")(settings.development);
const person = process.argv[2];

// .raw(`SELECT * FROM famous_people
//       WHERE last_name = ${person} OR first_name = ${person}`)

knex
  .select('*')
  .from('famous_people')
  .where('last_name', person)
  .orWhere('first_name', person)
  .then((result) => {
    console.log(result);
    console.log("YAY!");

    const id = result[0].id;
    const firstName = result[0].first_name;
    const lastName = result[0].last_name;
    const birthdate = result[0].birthdate;
    const birthday = `${birthdate.getFullYear()}-${birthdate.getMonth() +1}-${birthdate.getDate()}`;
    const FullSentence = `- ${id}: ${firstName} ${lastName}, born '${birthday}'`

    console.log(FullSentence);
    
  })
  .catch((err)=> {
    console.log("REJ-ECT-EEDDDDDD!");
    console.log(err);
  })
  .finally(() => {
    knex.destroy();
  })
