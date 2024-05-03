const listenigModel = require("../models/mysql/listening")
const getEvent = async(req, res) => {

  try {  
    const event = req.body;
    const createdListenig = await listenigModel.create(event);
    res.status(201).json({
      success: true,
      data: createdListenig
    })
  } catch (error) {
    res.status(500).send({
      success: false,
      message: error.message
    });
  }
}

module.exports = {
  getEvent,
}