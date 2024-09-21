const express = require('express');

const mongodb = require('mongodb');

const db = require('../data/database');

const objectId = mongodb.ObjectID;

const router = express.Router();

router.get('/', function(req, res){
    res.redirect('/home');
});

router.get('/home', function(req, res){
    res.render('index');
});

module.exports = router;