const express = require('express');
const listenigController = require('../controllers/listeningController');

function listenig(app) {
  const router = express.Router();
  app.use('/api/listening', router);

  router.post("/", listenigController.getEvent);
}

module.exports = listenig;