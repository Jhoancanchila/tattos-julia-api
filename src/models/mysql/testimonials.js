const db = require("../../../db");

const getAll = async( ) => {

  try {    
    const [ response ] = await db.query(`SELECT * FROM TESTIMONIALS WHERE rating > 3`);
  
    return response;
  } catch (error) {
    throw error;
  }

}

module.exports = {
  getAll,
}