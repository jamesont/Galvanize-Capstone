
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('users').insert({first_name: 'tommy', last_name: 'jameson', email: "thomas.gregory.jameson@gmail.com", hashed_password: 'stringthing'}),
        knex('users').insert({first_name: 'ellie', last_name: 'howard', email: "ellie@gmail.com", hashed_password: 'stringthing'}),
        knex('users').insert({first_name: 'mikey', last_name: 'liu', email: "mikey@gmail.com", hashed_password: 'stringthing'})
      ]);
    });
};
