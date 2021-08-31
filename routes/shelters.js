const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send("All shelters")
})
router.post('/', (req, res) => {
    res.send("Creating a shelter")
})
router.get('/:id', (req, res) => {
    res.send("viewing a single shelter")
})
router.get('/:id/edit', (req, res) => {
    res.send("Edit a shelter")
})

module.exports = router;