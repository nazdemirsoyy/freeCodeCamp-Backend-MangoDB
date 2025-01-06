require('dotenv').config();

const mongoose = require('mongoose');

// const uri = 'mongodb://nazdemirsoyy:L3tjxRXldmq9462y@cluster0-shard-00-01.wtp9e.mongodb.net:27017,cluster0-shard-00-00.wtp9e.mongodb.net:27017,cluster0-shard-00-02.wtp9e.mongodb.net:27017/?authSource=admin&replicaSet=atlas-zabhwm-shard-0&retryWrites=true&w=majority&appName=Cluster0&ssl=true';

const uri = "mongodb+srv://nazdemirsoyy:L3tjxRXldmq9462y@cluster0.wtp9e.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";



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
var Person = mongoose.model('Person', personSchema);

// Export the model
//module.exports.PersonModel = Person;


const createAndSavePerson = (done) => {
  var Naz = new Person({name: "Naz", age: 24, favoriteFoods:["fruits", "yoghurt"]});

  Naz.save((err, data) => {
    if (err) {
      return done(err); 
    }
    done(null, data); 
  });
};

var arrayOfPeople = [
  {name: "Frankie", age: 74, favoriteFoods: ["Del Taco"]},
  {name: "Sol", age: 76, favoriteFoods: ["roast chicken"]},
  {name: "Robert", age: 78, favoriteFoods: ["wine"]}
];

var createManyPeople = function(arrayOfPeople, done) {
  Person.create(arrayOfPeople, function (err, people) {
    if (err) {
      return done(err); 
    }
    done(null, people);
  });
};

const findPeopleByName = (personName, done) => {
  Person.find({name: personName}, function(err, personFound){
    if (err) {
      return done(err); 
    }
    done(null, personFound);
  });
};

var findOneByFood = function(food, done) {
  Person.findOne({favoriteFoods: food}, function (err, data) {
    if (err) {
      return done(err); 
    }
    done(null, data);
  });
};

var findPersonById = function(personId, done) {
  Person.findById(personId, function (err, data) {
    if (err) {
      return done(err); 
    }
    done(null, data);
  });
};
const findEditThenSave = (personId, done) => {
  const foodToAdd = "hamburger";

  Person.findById(personId, (err, person) => {
    if (err) {
      return done(err); 
    }
  
    // Array.push() method to add "hamburger" to the list of the person's favoriteFoods
    person.favoriteFoods.push(foodToAdd);

    // and inside the find callback - save() the updated Person.
    person.save((err, updatedPerson) => {
      if (err) {
        return done(err); 
      }
      done(null, updatedPerson)
    })
  })
};
const findAndUpdate = (personName, done) => {
  const ageToSet = 20;

  Person.findOneAndUpdate({name:personName}, {age: ageToSet},{new: true}, (err, updatedDoc) => {
    if (err) {
      return done(err); 
    }
    done(null, updatedDoc);
  })
};

const removeById = (personId, done) => {
  Person.findByIdAndRemove(personId, (err, removedDoc) => {
    if (err) {
      return done(err); 
    }
    done(null, removedDoc);
  }); 
};

const removeManyPeople = (done) => {
  const nameToRemove = "Mary";

  Person.remove({name: nameToRemove}, (err, response) => {
    if(err) 
      return console.log(err);
    done(null, response);
  })
};

const queryChain = (done) => {
  const foodToSearch = "burrito";


  Person.find({ favoriteFoods: foodToSearch })
    .sort({ name: 1 }) // Sort by name in ascending order
    .limit(2) // Limit results to 2 documents
    .select("-age") // Exclude the 'age' field
    .exec((err, data) => { // Execute the query
      if (err) {
        return done(err); // Pass the error to the callback
      }
      done(null, data); // Pass the resulting data to the callback
    });
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
