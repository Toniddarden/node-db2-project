
exports.up = function(knex) {
  return knex.schema.createTable('cars', cars => {
      cars.increments();

      cars.string('make', 255)
      cars.string('model', 255)
      cars.decimal('mileage')
  })
  .createTable('transmission', function(transmission) {
    transmission.increments('id');

    transmission.string('title', 255).notNullable();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema
  .dropTableIfExists('cars')
  .dropTableIfExists('transmission')
};


