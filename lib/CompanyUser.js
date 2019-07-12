var express = require('express');
var fs = require('fs');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var multer = require('multer');

var companySchema = new mongoose.Schema({
	username: {type: String, unique: true},
	password: {type: String},
	name: String
});

var CompanyUser = mongoose.model('',companySchema);
module.exports = CompanyUser;
