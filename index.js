const express = require('Express');
const app = Express();

app.get('/', (res, req) =>{
    res.send("working")
})

app.listen(3000, () => {
    console.log("Listening on 3000")
})