
const router = require('express').Router()

router.get('/devices', (req, res) => {
    const devices = [{
        id: 123,
        nome: "Geledeira",
        hwh: 23,
        corrente: 2.1,
        voltagem: 127,
        fp: 1
    }]
    res.json({
        success: true,
        deveces: devices
    })

})

module.exports = router