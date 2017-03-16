exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex('users_artists').del()
        .then(function () {
            return Promise.all([
                // Inserts seed entries
                knex('users_artists').insert({artist_id: 1, user_id: 1}),
                knex('users_artists').insert({artist_id: 2, user_id: 2}),
                knex('users_artists').insert({artist_id: 3, user_id: 1})
        ]);
    });
};
