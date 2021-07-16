const express = require('express')
const router = express.Router()

const Coaster = require('./../models/Coaster.model')


router.get('/getAllCoasters', (req, res) => {

    Coaster
        .find()
        .select('title imageUrl')
        .sort({ createdAt: 1 })
        .then(response => setTimeout(() => res.json(response), 200))
        .catch(err => res.status(500).json({ code: 500, message: 'Error fetching coasters', err }))
})


router.get('/getOneCoaster/:coaster_id', (req, res) => {

    Coaster
        .findById(req.params.coaster_id)
        .then(response => res.json(response))
        .catch(err => res.status(500).json({ code: 500, message: 'Error fetching coaster', err }))
})


router.post('/newCoaster', (req, res) => {

    const coaster = req.body

    Coaster
        .create(coaster)
        .then(response => res.json(response))
        .catch(err => res.status(500).json({ code: 500, message: 'Error saving coasters', err }))
})


router.put('/editCoaster/:coaster_id', (req, res) => {

    const coaster = req.body

    Coaster
        .findByIdAndUpdate(req.params.coaster_id, coaster)
        .then(response => res.json(response))
        .catch(err => res.status(500).json({ code: 500, message: 'Error editing coasters', err }))
})


module.exports = router