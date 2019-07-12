var express = require('express');
var fs = require('fs');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var multer = require('multer');

var companySchema = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
    required: true,
    trim: true
  },
  password: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    unique: true,
    required: true,
    trim: true
  }
});

var userSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
    required: true,
    trim: true
  },
  password: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    unique: true,
    required: true,
    trim: true
  }
});

var company = mongoose.model('Company',companySchema);
var user = mongoose.model('User',companySchema);

module.exports = company, user;
