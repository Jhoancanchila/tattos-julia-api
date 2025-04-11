const db = require("../../../db");
const dbPostgres = require("../../../db-postgres");

const getAll = async( ) => {

  try {   
    const response = await dbPostgres`SELECT * FROM "TESTIMONIALS" WHERE rating > 3`; 
    /* const [ response ] = await db.query(`SELECT * FROM TESTIMONIALS WHERE rating > 3`); */
  
    return response;
  } catch (error) {
    throw new error;
  }

}

module.exports = {
  getAll,
}