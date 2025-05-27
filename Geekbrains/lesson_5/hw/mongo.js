/** @module mongo */

  /**
   * 
   * @param {mongooseModel} model 
   * @param {Object} dataPerson 
   */
  const post = async (model, dataPerson) => {
    const { firstName, lastName, email, status, } = dataPerson;     
    const people = await model.find();
    const id = Math.max(...people.map(item => item.id)) + 1;
    const newPerson = new model({
      id,
      name: { firstName, lastName, },
      email,
      status,
    });
    try {
      const addedPerson = await newPerson.save();
      console.log('Added person: ', addedPerson)
    } catch (err) {
      console.error(err);
    }
  }

  /**
   * 
   * @param {mongooseModel} model 
   * @param {Object} dataPerson
   */
  const get = async (model, where) => {
    const { id, email, firstName, lastName, status } = where;
    const whereObject = {};
    if ( id ) whereObject.id = id;
    if ( email ) whereObject.email = email;
    try {
      const person = await model.find(whereObject);
      console.log(person);  
    } catch (err) {
      console.error(err);
    }
  }
  
  /**
   * 
   * @param {mongooseModel} model 
   * @param {Object} dataPerson 
   * @param {Object} dataPerson 
   */
  const patch = async (model, where, dataPerson) => {
    const { id, email, firstName, lastName, status, } = where;
    const { newEmail, newFirstName, newLastName, newStatus, } = dataPerson;
    const whereObject = {};
    if ( id ) whereObject.id = id;
    if ( email ) whereObject.email = email;     
    const newDataPerson = {};
    if ( newEmail ) newDataPerson.email = newEmail;
    if ( newStatus ) newDataPerson.status = newStatus;
    try {
      const person = await model.updateOne(whereObject, {$set: newDataPerson});
      console.log(person);
    } catch (err) {
      console.error(err);
    }
  }

  /**
   * 
   * @param {mongooseModel} model 
   * @param {Object} dataPerson
   */
  const del = async (model, where) => {
    const { id, email, firstName, lastName, status} = where;
    const whereObject = {};
    if ( id ) whereObject.id = id;
    if ( email ) whereObject.email = email;
    try {
      const person = await model.deleteMany(whereObject);
      console.log(person); 
    } catch (err) {
      console.error(err);
    }
  }

  export {post, get, patch, del, }
