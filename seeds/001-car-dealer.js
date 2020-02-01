
exports.seed = function(knex, Promise) {
 
  return knex('cars').truncate()
    .then(function () {

      return knex('cars').insert([
        {id: 1, make: 'Honda'},
        {id: 2, model: 'Civic'},
        {id: 3, mileage: '120000'}
      ]);
    });
};
