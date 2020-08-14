/* eslint-disable consistent-return */
require('dotenv').config();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const pool = require('../config/db');
const consoleLog = require('../../consoleLog');

const hashPassword = '';
const BCRYPT_SALT_ROUNDS = 12;
function generateToken(user) { return jwt.sign(user.toJSON(), process.env.ACCESS_TOKEN_SECRET, { expiresIn: '1d' }); }

const AuthController = {
  // google Oauth
  signup: async (req, res) => {
    consoleLog('req.body');
    try {
      if (!req.body.firstname || !req.body.lastname || !req.body.email || !req.body.password) {
        return res.status(409).send({
          message: 'complete the form before submitting',
        });
      }
      consoleLog(req.body);
      //   check if user already exist

      // save user in db
      const userDetail = {
        firstname: req.body.firstName,
        lastname: req.body.lastName,
        email: req.body.email,
        password: hashPassword,
        created_at: Date.now(),
      };

      const user = await pool.query('INSERT INTO users (userDetail) VALUES ($1, $2, $3, $4, $5), RETURNING *', [userDetail]);

      // generate token
      const accessToken = generateToken(req.user);

      return res.status(200).send({
        accessToken,
        success: true,
        data: user,
      });
    } catch (err) {
      res.status(500).send({
        success: false,
        message: err.message || 'signup failed.',
      });
    }
  },

};

module.exports = AuthController;
