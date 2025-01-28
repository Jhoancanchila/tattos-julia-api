const { validateFishing } = require("../utils/schemas/fishing");
const fishingModel = require("../models/mysql/contact");
const createFishing = async(req, res) => {
  const validateObject = validateFishing(req.body);

  if(validateObject.error) return res.status(400).json({error: JSON.parse(validateObject.error.message)})

  try {  
    const newFishing = await fishingModel.create(validateObject.data);
    res.status(201).json({
      success: true,
      data: newFishing
    })
  } catch (error) {
    res.status(500).send({
      success: false,
      message: error.message
    });
  }
}

module.exports = {
  createFishing,
}