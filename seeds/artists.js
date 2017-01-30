
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('artists').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('artists').insert({artist_name: 'metallica', 'genre': "metal"}),
        knex('artists').insert({artist_name: 'slayer' , 'genre': "metal"}),
        knex('artists').insert({artist_name: 'Pantera' , 'genre': "metal"}),
        knex('artists').insert({artist_name: 'Eminem' , 'genre': "shitty_rap"}),
        knex('artists').insert({artist_name: 'Sade' , 'genre': "sexy_time"}),
      ])
    })
}
