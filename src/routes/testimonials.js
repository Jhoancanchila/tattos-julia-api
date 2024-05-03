const express = require('express');
const testimonialsController = require('../controllers/testimonialsController');

function testimonials(app) {
  const router = express.Router();
  app.use('/api/testimonials', router);

  router.get("/", testimonialsController.getAllTestimonials);
}

module.exports = testimonials;