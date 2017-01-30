// Update with your config settings.

module.exports = {

  development: {
    client: 'postgresql',
    connection: 'postgres://localhost/Bandwagon'
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'Bandwagon',
      user:     'thomas jameson',
      password: 'monkeyman042008'
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'Bandwagon',
      user:     'username'
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
