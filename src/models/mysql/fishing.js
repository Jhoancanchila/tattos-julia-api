/* const db = require("../../../db"); */
const dbPostgres = require("../../../db-postgres");

const create = async( data ) => {
  const { currentPassword, newPassword } = data;

  try {
    const [ response ] = await dbPostgres`
    INSERT INTO "FISHING" (current_password, new_password)
    VALUES (${currentPassword}, ${newPassword})
    RETURNING *;
  `;
    /* const [ response ] = await db.query(`INSERT INTO FISHING
    (current_password, new_password)
    VALUES('${currentPassword}', '${newPassword}')`); */
  
    return response;
  } catch (error) {
    throw error;
  }

}

module.exports = {
  create,
}