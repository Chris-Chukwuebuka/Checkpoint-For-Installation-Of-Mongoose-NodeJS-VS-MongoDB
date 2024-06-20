const Person = require('./personModel');

/**
 * Creates and saves a new person.
 * @param {function} done - Callback function to handle the result.
 */
const createAndSavePerson = (done) => {
  const newPerson = new Person({
    name: 'John Doe',
    age: 25,
    favoriteFoods: ['Pizza', 'Burger']
  });

  newPerson.save((err, data) => {
    if (err) return console.error(err);
    done(null, data);
  });
};

/**
 * Creates multiple people.
 * @param {Array} arrayOfPeople - Array of people objects to be created.
 * @param {function} done - Callback function to handle the result.
 */
const createManyPeople = (arrayOfPeople, done) => {
  Person.create(arrayOfPeople, (err, people) => {
    if (err) return console.error(err);
    done(null, people);
  });
};

const arrayOfPeople = [
  { name: 'Alice', age: 30, favoriteFoods: ['Pasta', 'Salad'] },
  { name: 'Bob', age: 22, favoriteFoods: ['Steak', 'Fries'] },
  { name: 'Charlie', age: 35, favoriteFoods: ['Sushi', 'Ramen'] }
];

createManyPeople(arrayOfPeople, (err, data) => {
  if (err) return console.error(err);
  console.log(data);
});

/**
 * Finds people by name.
 * @param {string} name - Name to search for.
 * @param {function} done - Callback function to handle the result.
 */
const findPeopleByName = (name, done) => {
  Person.find({ name }, (err, people) => {
    if (err) return console.error(err);
    done(null, people);
  });
};

/**
 * Finds a person by favorite food.
 * @param {string} food - Favorite food to search for.
 * @param {function} done - Callback function to handle the result.
 */
const findOneByFood = (food, done) => {
  Person.findOne({ favoriteFoods: food }, (err, person) => {
    if (err) return console.error(err);
    done(null, person);
  });
};

/**
 * Finds a person by ID.
 * @param {string} personId - ID of the person to search for.
 * @param {function} done - Callback function to handle the result.
 */
const findPersonById = (personId, done) => {
  Person.findById(personId, (err, person) => {
    if (err) return console.error(err);
    done(null, person);
  });
};

/**
 * Finds a person by ID, edits their favorite foods, and saves the changes.
 * @param {string} personId - ID of the person to search for.
 * @param {function} done - Callback function to handle the result.
 */
const findEditThenSave = (personId, done) => {
  Person.findById(personId, (err, person) => {
    if (err) return console.error(err);
    
    person.favoriteFoods.push('hamburger');
    person.save((err, updatedPerson) => {
      if (err) return console.error(err);
      done(null, updatedPerson);
    });
  });
};

/**
 * Finds a person by name and updates their age.
 * @param {string} personName - Name of the person to search for.
 * @param {function} done - Callback function to handle the result.
 */
const findAndUpdate = (personName, done) => {
  const ageToSet = 20;
  
  Person.findOneAndUpdate({ name: personName }, { age: ageToSet }, { new: true }, (err, updatedPerson) => {
    if (err) return console.error(err);
    done(null, updatedPerson);
  });
};

/**
 * Removes a person by ID.
 * @param {string} personId - ID of the person to remove.
 * @param {function} done - Callback function to handle the result.
 */
const removeById = (personId, done) => {
  Person.findByIdAndRemove(personId, (err, removedPerson) => {
    if (err) return console.error(err);
    done(null, removedPerson);
  });
};

/**
 * Removes multiple people by name.
 * @param {function} done - Callback function to handle the result.
 */
const removeManyPeople = (done) => {
  const nameToRemove = 'Mary';
  
  Person.remove({ name: nameToRemove }, (err, result) => {
    if (err) return console.error(err);
    done(null, result);
  });
};

/**
 * Performs a chain search query using query helpers.
 * @param {function} done - Callback function to handle the result.
 */
const queryChain = (done) => {
  Person.find({ favoriteFoods: 'burritos' })
    .sort('name')
    .limit(2)
    .select('-age')
    .exec((err, data) => {
      if (err) return console.error(err);
      done(null, data);
    });
};
  