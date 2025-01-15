import mongoose from 'mongoose';

const Schema = mongoose.Schema;

mongoose.connect('mongodb://127.0.0.1:27017/test')
  .then(() => {
    console.log('Connected!');

    const PersonSchema = new Schema({
      id: {
        type: Number,
        required: true,
      },
      name:{
        firstName: {
          type: String,
          default: 'anonymous',
        },
        lastName: {
          type: String,
          default: '',
        },
      },
      email: {
        type: String,
        required:  true,
      }
    });

    const Person = mongoose.model('person', PersonSchema);

    const john = new Person({
      id: 1000,
      name: {
        firstName: 'John',
        lastName: 'Smith',
      },
      email: 'john_smith@test.net',
    });

    john.save().then(john => {
      console.log('Doc: ', john);
    }, err => {
      console.error(err);
    });

    Person.find().then(john => {
      console.log(john);
    }, err => {
      console.error(err);
    });

    // Person.findOne().then(john => {
    //   console.log(john);
    // }, err => {
    //   console.error(err);
    // });

  });

