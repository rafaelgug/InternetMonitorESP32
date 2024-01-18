const express = require('express')
const app = express()
const api = require('./rotas/')
app.use('/api', api)
const PORT = 3080

app.get('/', (req, res) => {
    res.json({
        success: true
    })

})



app.listen(PORT)