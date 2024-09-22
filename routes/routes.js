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


router.get('/education', function(req, res){
    res.render('education')
});

router.get('/blog', function(req, res){
    res.render('blog')
});


router.get('/projects', function(req, res){
    res.render('projects')
});

router.get('/contacts', function(req, res){
    res.render('contacts')
});

module.exports = router;