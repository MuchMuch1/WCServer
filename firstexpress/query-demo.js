//Name: Chadle Rei Miclat
//App name: query-demo.js

const express = require('express')
const app = express()

app.get('/', (req, res) => {
    console.log(req.query)
})

app.listen(1001)
