const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');

const tripsCtrl = require('../controllers/trips');
const authController = require('../controllers/authentication');
const { authenticateJWT } = require('../controllers/authentication');  // JWT auth middleware

router.route("/register").post(authController.register);

router.route("/login").post(authController.login);

router
  .route("/trips")
  .get(tripsCtrl.tripsList)
  .post(authenticateJWT, tripsCtrl.tripsAddTrip);

router
  .route("/trips/:tripCode")
  .get(tripsCtrl.tripsFindCode)
  .put(authenticateJWT, tripsCtrl.tripsUpdateTrip);

module.exports = router;