// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: {
      user: "nuodipxijxcdpk",
      password: "VzEMIR9JxlW4ABySsAXIQPHlKJ",
      database: "d40gpraqqsj3dr",
      host: "ec2-23-21-102-155.compute-1.amazonaws.com",
      port: 5432,
      ssl: true
    }
  },
};

  // staging: {
  //   client: 'postgresql',
  //   connection: {
  //     database: 'my_db',
  //     user:     'username',
  //     password: 'password'
  //   },
  //   pool: {
  //     min: 2,
  //     max: 10
  //   },
  //   migrations: {
  //     tableName: 'knex_migrations'
  //   }
  // },
  //
  // production: {
  //   client: 'postgresql',
  //   connection: {
  //     database: 'my_db',
  //     user:     'username',
  //     password: 'password'
  //   },
  //   pool: {
  //     min: 2,
  //     max: 10
  //   },
  //   migrations: {
  //     tableName: 'knex_migrations'
  //   }
  // }
