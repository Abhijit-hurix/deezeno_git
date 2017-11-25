const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const accordianSchema = new Schema({
	title:String,
	description:String
});
const checkboxSchema = new Schema({
	question:String,
	options:[String]
});

mongoose.model('accordian',accordianSchema);
mongoose.model('checkbox',checkboxSchema);