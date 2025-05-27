/** @module mongo */

  const post = async (model, data) => {
    const newModel = new model({ ...data });
    try {
      await newModel.save();
    } catch (err) {
      console.error(err);s
    }
  }

  const get = async (model, where) => {
    try {
      if ( !where || !Object.keys(where).length ) return await model.find();
      else return await model.findOne({...where});
    } catch (err) {
      console.error(err);
    }
  }
  
  // const patchPerson = async (model, where, dataPerson) => {
  //   const { id, email, firstName, lastName, status, } = where;
  //   const { newEmail, newFirstName, newLastName, newStatus, } = dataPerson;
  //   const whereObject = {};
  //   if ( id ) whereObject.id = id;
  //   if ( email ) whereObject.email = email;     
  //   const newDataPerson = {};
  //   if ( newEmail ) newDataPerson.email = newEmail;
  //   if ( newStatus ) newDataPerson.status = newStatus;
  //   try {
  //     const person = await model.updateOne(whereObject, {$set: newDataPerson});
  //     console.log(person);
  //   } catch (err) {
  //     console.error(err);
  //   }
  // }
  const patch = async (model, where, data) => {
    try {
      await model.updateOne({...where}, {$set: {...data}});
    } catch (err) {
      console.error(err);
    }
  }

  const del = async (model, where) => {
    try {
      await model.deleteMany({...where});
    } catch (err) {
      console.error(err);
    }
  }

  export {post, get, patch, del, }
