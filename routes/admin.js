const express = require('express');
const router = express.Router();

router.use((req, res, next) => {
    if(req.query.admin) {
        next();
    }
    else {
        res.send("Sorry, you need to be an admin!")
    }
})

router.get('/topsecret', (req, res) => {
    res.send('Entered TOP-SECRET area')
})
router.get('/deleteeverything', (req, res) => {
    res.send('Deleting everything!')
})

module.exports = router;