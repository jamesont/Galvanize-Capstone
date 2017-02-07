// Update with your config settings.

module.exports = {

  development: {
    client: 'postgresql',
    connection: 'postgres://localhost/bandwagon'
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'bandwagon',
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
      database: 'bandwagon',
      user:     'username'
    },
    
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
