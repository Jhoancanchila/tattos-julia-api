const express = require('express');
const contactController = require('../controllers/contactController');

function contact(app) {
  const router = express.Router();
  app.use('/api/contacts', router);

  router.post("/", contactController.createNewContact);
}

module.exports = contact;