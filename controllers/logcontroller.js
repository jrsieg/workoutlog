const router = require('express').Router();
const Log = require('../db').import('../models/log');

const validateSession = require('../middleware/validate-session');

router.get('/', (req, res) => {
    Log.findAll()
    .then(logs => res.status(200).json(logs))
    .catch(err => res.status(500).json({
        error: err
    }));
});

router.post('/', validateSession, (req,res) => {
    const logFromRequest = {
        nameOfExercise: req.body.nameOfExercise,
        repCount: req.body.reps,
        weight: req.body.weight,
    }

    Log.create(logFromRequest)
        .then(log => res.status(200).json(log))
        .catch(err => res.status(500).json(err))
})

router.get('/:name', (req, res) => {
    Log.findOne({ where: { nameOfExercise: req.params.name }})
        .then(log => res.status(200).json(log))
        .catch(err => res.status(500).json({ error: err}))
})

router.delete('/:id', validateSession, (req, res) => {
    Log.destroy({ where: { id: req.params.id } })
        .then(result => res.status(200).json(result))
        .catch(err => res.status(500).json({ error: err }))
})

module.exports = router;