var _ = require('lodash');
var async = require('async');
var crypto = require('crypto');
var nodemailer = require('nodemailer');
var passport = require('passport');
var User = require('../models/User');
var express = require('express');
var router = express.Router();

router.get('/loadAuth',function(req, res, next) {
    return res.json(req.session.user || null);
})
/**
 * POST /login
 * Sign in using email and password.
 */
router.post('/login',function(req, res, next) {
  req.assert('email', 'Email is not valid').isEmail();
  req.assert('password', 'Password cannot be blank').notEmpty();

  var errors = req.validationErrors();

  if (errors) {
    return res.redirect('/login');
  }

  passport.authenticate('local', function(err, user, info) {
    if (err) {
      return next(err);
    }
    if (!user) {
      return res.redirect('/login');
    }
    req.logIn(user, function(err) {
      if (err) {
        return next(err);
      }
      res.json(user);
    });
  })(req, res, next);
})

/**
 * GET /logout
 * Log out.
 */
router.get('/logout',function(req, res) {
  req.logout();
  res.redirect('/');
})
router.post('/file/upload',upload.single('uploadFile'),function(req, res, next) {
   res.json({});
})

module.exports = router;