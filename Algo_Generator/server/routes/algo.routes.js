const AlgorithmController = require('../controllers/algo.controller');


module.exports = app => {
    app.get('/api/algorithms', AlgorithmController.index)
}