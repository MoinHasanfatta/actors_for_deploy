const express = require('express')
const router = express.Router()
const Actor = require('../models/actors')

// GET all
router.get('/', async (req, res) => {
    const actors = await Actor.find()
    res.json(actors)
})

// POST
router.post('/', async (req, res) => {
    const newActor = new Actor({ name: req.body.name })
    const saved = await newActor.save()
    res.status(201).json(saved)
})

// PUT
router.put('/:id', async (req, res) => {
    const updated = await Actor.findByIdAndUpdate(
        req.params.id,
        { name: req.body.name },
        { new: true }
    )
    res.json(updated)
})

// DELETE
router.delete('/:id', async (req, res) => {
    const deleted = await Actor.findByIdAndDelete(req.params.id)
    res.json(deleted)
})

module.exports = router
