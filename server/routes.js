const express = require ('express');
const router = express.Router();
const Item  = require ('./models/index');

//GET all item
router.get('/item', async (req, res) => {
    try{ 
    const items = await Item.findAll();
    res.json(items);
    } catch (error) {
        res.status(500) .send(error.message);
    }
});


module.exports = router;