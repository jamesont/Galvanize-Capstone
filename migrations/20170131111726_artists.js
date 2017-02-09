
exports.up = function(knex, Promise) {
	return knex.schema.createTable('artists', (table) => {
      table.increments()
      table.string('artistName').notNullable().defaultTo('')
      table.string('album').notNullable().defaultTo('')
      table.string('track').notNullable().defaultTo('')
      table.string('genre').notNullable().defaultTo('')
      table.string('artwork').notNullable().defaultTo('')
      table.timestamps(true, true);
    });
};

exports.down = function(knex) {
  return knex.schema.dropTable('artists');
};
