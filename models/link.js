const mongoose = require('mongoose');

const linkSchema = new mongoose.Schema({
	creator: {
		type: String,
		required: true
	},
    url: {
		type: String,
		required: true
	},
    short: {
		type: String,
		required: true
	},
    click: {
		type: Number,
		required: true
	},
	date: {
		type: Number,
		required: true
	}
});

const link = mongoose.model('link', linkSchema);

module.exports = link;