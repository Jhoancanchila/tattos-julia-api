const testimonialsModel = require("../models/mysql/testimonials");

const getAllTestimonials = async(req, res) => {

  try {  
    const allTestimonials = await testimonialsModel.getAll();
    res.status(201).json({
      success: true,
      data: allTestimonials
    })
  } catch (error) {
    res.status(500).send({
      success: false,
      message: error.message
    });
  }
}

module.exports = {
  getAllTestimonials,
}