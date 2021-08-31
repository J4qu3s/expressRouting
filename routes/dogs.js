const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send("All dogs")
})
router.post('/', (req, res) => {
    res.send("Creating a new dog")
})
router.get('/:id', (req, res) => {
    res.send("viewing a single dog")
})
router.get('/:id/edit', (req, res) => {
    res.send("Edit a dogs info")
})

module.exports = router;