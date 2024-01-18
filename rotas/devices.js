const router = require('express').Router()
const Device = require('../model/Devices')

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
    const novoDevice = new Device({
        nome: req.body.nome,
        kwh: req.body.kwh,
        corrente: req.body.corrente,
        voltagem: req.body.voltagem,
        fp: req.body.fp
    })
    novoDevice.save()
        .then((dados)=>{
            res.json({
                success:true,
                message: dados
            })
        })
        .catch((err)=>{
            res.json({
                success: false,
                message: err
            })
        })
})

module.exports = router