
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('artists').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('artists').insert({artist: 'metallica', 'genre': "metal", track: 'trackify', album: "the best album", artwork: "http://4.bp.blogspot.com/_DuiZlIWXf7M/S6zL0iMD0UI/AAAAAAAAAYs/Xw4VGjvTXpA/s1600/silent_scream_spanish_rock_cd_art_design_2.jpg"}),
        knex('artists').insert({artist: 'slayer' , 'genre': "metal", track: 'trackify', album: "the best album", artwork: "http://4.bp.blogspot.com/_DuiZlIWXf7M/S6zL0iMD0UI/AAAAAAAAAYs/Xw4VGjvTXpA/s1600/silent_scream_spanish_rock_cd_art_design_2.jpg"}),
        knex('artists').insert({artist: 'Pantera' , 'genre': "metal", track: 'trackify', album: "the best album", artwork: "http://4.bp.blogspot.com/_DuiZlIWXf7M/S6zL0iMD0UI/AAAAAAAAAYs/Xw4VGjvTXpA/s1600/silent_scream_spanish_rock_cd_art_design_2.jpg"}),
        knex('artists').insert({artist: 'Eminem' , 'genre': "shitty_rap", track: 'trackify', album: "the best album", artwork: "http://4.bp.blogspot.com/_DuiZlIWXf7M/S6zL0iMD0UI/AAAAAAAAAYs/Xw4VGjvTXpA/s1600/silent_scream_spanish_rock_cd_art_design_2.jpg"}),
        knex('artists').insert({artist: 'Sade' , 'genre': "sexy_time", track: 'trackify', album: "the best album", artwork: "http://4.bp.blogspot.com/_DuiZlIWXf7M/S6zL0iMD0UI/AAAAAAAAAYs/Xw4VGjvTXpA/s1600/silent_scream_spanish_rock_cd_art_design_2.jpg"}),
      ])
    })
}
