import mongoose from 'mongoose';
import {post, get, patch, del, } from './mongo.js';

const Schema = mongoose.Schema;
await mongoose.connect('mongodb://127.0.0.1/test');

const getPersonModel = () => {
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
    },
    status: {
      type: String,
      default: 'active',
    },
  });
  
  return mongoose.model('person', PersonSchema);
}

const Person = getPersonModel();

//? post
// post(Person, {
//   firstName: 'Test',
//   lastName: 'Tester',
//   email: 'test@smith.com',
// });

//? get
// get(Person, {id: 1006, });
// get(Person, {email: 'deboi_semon@paris.com', });

//? patch
// patch(Person, {id: 1006}, {newEmail: 'anonymoys@noone.net', newStatus: 'noactive'});

//? delete
// del(Person, {id: 1006, });








// Promise
// 
// mongoose.connect('mongodb://127.0.0.1:27017/test')
//   .then(() => {
//     console.log('Connected!');

//     const PersonSchema = new Schema({
//       id: {
//         type: Number,
//         required: true,
//       },
//       name:{
//         firstName: {
//           type: String,
//           default: 'anonymous',
//         },
//         lastName: {
//           type: String,
//           default: '',
//         },
//       },
//       email: {
//         type: String,
//         required:  true,
//       }
//     });

//     const Person = mongoose.model('person', PersonSchema);


//     /**
//      * 
//      * @param {Object} dataPerson 
//      */
//     const postPerson = dataPerson => {
//       const { firstName, lastName, email, } = dataPerson;
//       Person.find().then(
//         data => {
//           const newId = Math.max(...data.map(item => item.id)) + 1;
//           const newPerson = new Person({
//             id: newId,
//             name: { firstName, lastName, },
//             email,
//           });

//           newPerson.save().then(
//             addedPerson => console.log('Added person: ', addedPerson), 
//             err => console.error(err)
//           );
//         },
//         err => console.error(err)
//       );       
//     }
 

//     /**
//      * 
//      * @param {Object} where 
//      */
//     const getPerson = where => {
//       const { id, email, firstName, lastName, } = where;
//       const whereObject = {};
//       if ( id ) whereObject.id = id;
//       if ( email ) whereObject.email = email;
//       // if ( firstName ) whereObject.name.firstName = firstName; //? not working
//       // if ( lastName ) whereObject.name.lastName = lastName;    //? not working

//       Person.find(whereObject).then(
//         person => console.log(person),
//         err => console.error(err)
//       );
//     }
    

//     /**
//      * 
//      * @param {Object} where 
//      * @param {Object} dataPerson 
//      */
//     const patchPerson = (where, dataPerson) => {
//       const { id, email, firstName, lastName, } = where;
//       const { newEmail, newFirstName, newLastName, } = dataPerson;

//       const whereObject = {};
//       if ( id ) whereObject.id = id;
//       if ( email ) whereObject.email = email;
//       // if ( firstName ) whereObject.name.firstName = firstName; //? not working
//       // if ( lastName ) whereObject.name.lastName = lastName; //? not working
      
//       const newDataPerson = {};
//       if ( newEmail ) newDataPerson.email = newEmail;
//       // if ( newFirstName ) newDataPerson.name.firstName = newFirstName; 
//       // if ( newLastName ) newDataPerson.name.lastName = newLastName;
      
//       Person.updateOne(whereObject, {$set: newDataPerson}).then(
//         person => console.log(person),
//         err => console.error(err)
//       );
//     }


//     /**
//      * 
//      * @param {Object} where 
//      */
//     const deletePerson = where => {
//       const { id, email, firstName, lastName, } = where;
//       const whereObject = {};
//       if ( id ) whereObject.id = id;
//       if ( email ) whereObject.email = email;
//       // if ( firstName ) whereObject.name.firstName = firstName; //? not working
//       // if ( lastName ) whereObject.name.lastName = lastName; //? not working

//       Person.deleteMany(whereObject).then(
//         person => console.log(person),
//         err => console.error(err)
//       );
//     }

//     //? add
//     // postPerson({
//     //   firstName: 'Johnny',
//     //   lastName: 'Smith',
//     //   email: 'johnny@smith.com',
//     // })

//     //? get
//     // getPerson({id: 1002, })
//     // getPerson({email: 'deboi_semon@paris.com', })

//     //? patch
//     // patchPerson({id: 1006}, {newEmail: 'anonymoys@noone.net'})

//     //? delete
//     // deletePerson({id: 1006, })

//   });
