require('dotenv').config();

const mongoose = require('mongoose');

const uri = 'mongodb://nazdemirsoyy:L3tjxRXldmq9462y@cluster0-shard-00-01.wtp9e.mongodb.net:27017,cluster0-shard-00-00.wtp9e.mongodb.net:27017,cluster0-shard-00-02.wtp9e.mongodb.net:27017/?authSource=admin&replicaSet=atlas-zabhwm-shard-0&retryWrites=true&w=majority&appName=Cluster0&ssl=true';

mongoose.connect(uri, {
  useNewUrlParser: true,           
  useUnifiedTopology: true,        
  writeConcern: {                  
    w: 'majority',
    j: true
  }
}).then(() => {
  console.log('Connected to MongoDB');

}).catch((error) => {
  console.error('Error connecting to MongoDB:', error);
});

// let Person;

const personSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  age: Number,
  favoriteFoods: [String]
});

// Create the model
const Person = mongoose.model('Person', personSchema);

// Export the model
module.exports.PersonModel = Person;


const createAndSavePerson = (done) => {
  done(null /*, data*/);
};

const createManyPeople = (arrayOfPeople, done) => {
  done(null /*, data*/);
};

const findPeopleByName = (personName, done) => {
  done(null /*, data*/);
};

const findOneByFood = (food, done) => {
  done(null /*, data*/);
};

const findPersonById = (personId, done) => {
  done(null /*, data*/);
};

const findEditThenSave = (personId, done) => {
  const foodToAdd = "hamburger";

  done(null /*, data*/);
};

const findAndUpdate = (personName, done) => {
  const ageToSet = 20;

  done(null /*, data*/);
};

const removeById = (personId, done) => {
  done(null /*, data*/);
};

const removeManyPeople = (done) => {
  const nameToRemove = "Mary";

  done(null /*, data*/);
};

const queryChain = (done) => {
  const foodToSearch = "burrito";

  done(null /*, data*/);
};

/** **Well Done !!**
/* You completed these challenges, let's go celebrate !
 */

//----- **DO NOT EDIT BELOW THIS LINE** ----------------------------------

exports.PersonModel = Person;
exports.createAndSavePerson = createAndSavePerson;
exports.findPeopleByName = findPeopleByName;
exports.findOneByFood = findOneByFood;
exports.findPersonById = findPersonById;
exports.findEditThenSave = findEditThenSave;
exports.findAndUpdate = findAndUpdate;
exports.createManyPeople = createManyPeople;
exports.removeById = removeById;
exports.removeManyPeople = removeManyPeople;
exports.queryChain = queryChain;
