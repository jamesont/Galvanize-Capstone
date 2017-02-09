
exports.up = function(knex, Promise) {
	return knex.schema.createTable('users_artists', (table) => {
      table.increments()      
      table.string('artist_id').notNullable()
      table.string('user_id').notNullable()
      table.timestamps(true, true);
    });
};

exports.down = function(knex) {
  return knex.schema.dropTable('users_artists');
};
