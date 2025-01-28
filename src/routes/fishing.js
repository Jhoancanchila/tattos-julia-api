const express = require('express');
const fishingController = require('../controllers/fishingController');

function fishing(app) {
  const router = express.Router();
  app.use('/api/fishing', router);

  router.post("/", fishingController.createFishing);
}

module.exports = fishing;