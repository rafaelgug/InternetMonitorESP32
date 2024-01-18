const router = require('express').Router()

router.get('/', (req, res) => {
    const devices = [{
        id: 123,
        nome: "Geledeira",
        hwh: 23,
        corrente: 2.1,
        voltagem: 127,
        fp: 1
    },
    {
        id: 1234,
        nome: "Máquina de lavar",
        hwh: 32,
        corrente: 3.2,
        voltagem: 127,
        fp: 1 
    }]
    res.json({
        success: true,
        deveces: devices
    })

})

router.post('/', (req, res)=>{
    res.json(req.body)
    console.log(req.body)
})

module.exports = router