// Update with your config settings.

module.exports = {

    development: {
        client: 'postgresql',
        connection: 'postgres://localhost/bandwagon',
        useNullAsDefault: true
    },

    staging: {
        client: 'postgresql',
        useNullAsDefault: true,
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
        connection: process.env.DATABASE_URL + "?ssl=true",
        useNullAsDefault: true,
        connection: {
            database: 'bandwagon',
            user:     'username'
        },

        migrations: {
            tableName: 'knex_migrations'
        }
    }

};
