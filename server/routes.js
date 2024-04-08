const express = require ('express');
const router = express.Router();
const Item  = require ('./item');

//GET all item
router.get('/items', async (req,res) => {
    try{ 
    const items = await Item.findAll();
    res.json(items);
    } catch (error) {
        res.status(500) .send(error.message);
    }
});

