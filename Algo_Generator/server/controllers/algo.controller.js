const Algorithm = require('../models/algo.model');

module.exports = {
    index: (req, res) => {
        Algorithm.find()
        .then(algorithms => res.json({results: algorithms}))
        .catch(err => console.log(err));
    }
}