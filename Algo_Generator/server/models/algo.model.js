const mongoose = require('mongoose');

const AlgorithmSchema = new mongoose.Schema({

    name: {
        type: String,
        required: [true, 'An Algorithm name is required'],
        minlength: [4, 'Authors name must be at least 4 characters.']
    },
    description: {
        type: String,
        required:[true, 'Algorithm Description Required'],
        minlength: [20, 'Please give a better description.(min-length 20 characters)']
    },
    videoLink: {
        type: String,
    }
}, {timestamps: true});

const Algorithm = mongoose.model('Algorithm', AlgorithmSchema);

module.exports = Algorithm;