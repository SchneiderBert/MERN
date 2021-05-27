const AlgorithmController = require('../controllers/algo.controller');


module.exports = app => {
    app.get('/api/algorithms', AlgorithmController.index)
    app.post('/api/create/algorithm', AlgorithmController.create)
    app.get('/api/algorithm/:id', AlgorithmController.show)
    app.put('/api/update/algorithm/:id', AlgorithmController.update)
    app.delete('/api/destroy/algorithm/:id', AlgorithmController.destroy)
}