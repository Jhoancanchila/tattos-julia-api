const { validateContact } = require("../utils/schemas/contact");
const contactModel = require("../models/mysql/contact");
const { sendEmail, sendEmailToBussines } = require("../services/sendEmail");
const createNewContact = async(req, res) => {
  const validateObject = validateContact(req.body);

  if(validateObject.error) return res.status(400).json({error: JSON.parse(validateObject.error.message)})

  try {  
    const createdContact = await contactModel.create(validateObject.data);
    res.status(201).json({
      success: true,
      data: createdContact
    })
    sendEmail(validateObject.data.email);
    sendEmailToBussines(validateObject.data.email,validateObject.data.message,validateObject.data.name);
  } catch (error) {
    res.status(500).send({
      success: false,
      message: error.message
    });
  }
}

module.exports = {
  createNewContact,
}