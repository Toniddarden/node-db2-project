const express = require('express');
const db = require('../data/db.config');

const router = express.Router();

router.get('/', async (req, res) => {
    try{
        const cars = await db('cars');
        res.json(cars);
    }catch(err){
        res.status(500).json({message: 'cannot get cars'})
    }
})

router.post('/', async (req, res) => {
    const postBody = req.body;
    try{
        const cars = await db('cars').insert(postBody);
        res.status(201).json(cars);
    }catch(err){
        res.status(500).json({message: 'failed to post'})
    }
})



module.exports = router;