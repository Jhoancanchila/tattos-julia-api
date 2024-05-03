const db = require("../../../db");

const create = async( data ) => {
  const { name, email, phone, message } = data;

  try {    
    const [ response ] = await db.query(`INSERT INTO CONTACT
    (name, email, phone, message)
    VALUES('${name}', '${email}', '${phone}', '${message}')`);
  
    return response;
  } catch (error) {
    throw error;
  }

}

module.exports = {
  create,
}