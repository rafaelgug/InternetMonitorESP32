const express = require('express')
const app = express()
const PORT = 3080

app.get('/', (req, res) => {
    res.json({
        success: true
    })

})

app.listen(PORT)