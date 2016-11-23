'use strict';

const settings = require("./knexfile");
const knex = require("knex")(settings.development);

const addPeople = (inputONEfirst, inputTWOlast, inputTHREEdate) => {
  knex('famous_people').insert({
    first_name: inputONEfirst,
    last_name: inputTWOlast,
    birthdate: inputTHREEdate
  }, "*").then((result) => {
    console.log(result);
  }).catch((err) => {
    console.log("Boooooo-urns");
  })

}

addPeople(process.argv[2], process.argv[3], process.argv[4]);
