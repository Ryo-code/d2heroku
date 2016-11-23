exports.up = function(knex, Promise) {
 return Promise.all([
  knex.schema.createTable('milestones', (table) => {
    table.increments('id');
    table.string('Description');
    table.date('date_achieved');
    table.integer('famous_person_id'); //Need to create the foreign id before officially linking it in the next line
    table.foreign('famous_person_id').references('famous_people.id');
  })
])
};

exports.down = (knex, Promise) => {
  return Promise.all([
  knex.schema.dropTable('milestones')
  ])
};
