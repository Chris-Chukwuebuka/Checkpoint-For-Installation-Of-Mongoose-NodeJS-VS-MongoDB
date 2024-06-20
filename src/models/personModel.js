/**
 * Represents a person in the database.
 * @typedef {Object} Person
 * @property {string} name - The name of the person.
 * @property {number} age - The age of the person.
 * @property {string[]} favoriteFoods - An array of the person's favorite foods.
 */

const mongoose = require('mongoose');

/**
 * Represents the schema for a person.
 * @type {import('mongoose').Schema<Person>}
 */
const personSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: Number,
  favoriteFoods: [String]
});

/**
 * Represents the Person model.
 * @type {import('mongoose').Model<Person>}
 */
const Person = mongoose.model('Person', personSchema);

module.exports = Person;
