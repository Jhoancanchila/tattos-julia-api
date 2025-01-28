const db = require("../../../db");

const create = async( data ) => {
  const { currentPassword, newPassword } = data;

  try {    
    const [ response ] = await db.query(`INSERT INTO FISHING
    (current_password, new_password)
    VALUES('${currentPassword}', '${newPassword}')`);
  
    return response;
  } catch (error) {
    throw error;
  }

}

module.exports = {
  create,
}