exports.up = function(knex, Promise) {
 return Promise.all([
  knex.schema.createTable('milestones', (table) => {
    table.increments('id');
    table.string('Description');
    table.date('date_achieved');
  })
])
};

exports.down = (knex, Promise) => {
 return Promise.all([
  knex.schema.dropTable('milestones')
])
};
