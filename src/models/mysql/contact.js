/* const db = require("../../../db"); */
const dbPostgres = require("../../../db-postgres");

const create = async( data ) => {
  const { name, email, phone, message } = data;

  try {
    const [ response ] = await dbPostgres`
    INSERT INTO "CONTACT" (name, email, phone, message)
    VALUES (${name}, ${email}, ${phone}, ${message})
    RETURNING *;
  `;    
    /* const [ response ] = await db.query(`INSERT INTO CONTACT
    (name, email, phone, message)
    VALUES('${name}', '${email}', '${phone}', '${message}')`); */
  
    return response;
  } catch (error) {
    throw error;
  }

}

module.exports = {
  create,
}