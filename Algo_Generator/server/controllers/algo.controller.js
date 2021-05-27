const Algorithm = require('../models/algo.model');

module.exports = {
    index: (req, res) => {
        Algorithm.find()
            .then(algorithms => res.json({ results: algorithms }))
            .catch(err => console.log(err));
    },
    create: (req, res) => {
        Algorithm.create(req.body)
            .then(algorithm => res.json({ results: algorithm }))
            .catch(err => console.log(err))
    },

    show: (req, res) => {
        Algorithm.findOne({ _id: req.params.id })
            .then(algorithm => res.json({ results: algorithm }))
            .catch(err => res.json(err.errors))

    },
    update: (req, res) => {
        Algorithm.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true, runValidators: true, useFindAndModify: false })
            .then(algorithm => res.json({ results: algorithm }))
            .catch(err => res.json(err.errors))

    },
    destroy: (req, res) => {
        Algorithm.deleteOne({ _id: req.params.id })
            .then(result => res.json({ results: result }))
            .catch(err => res.json(err.errors))

    }
}

