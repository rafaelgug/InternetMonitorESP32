const router = require('express').Router()
const Device = require('../model/Devices')

router.get('/', async (req, res) => {
    try {
        const listaDevices = await Device.find()
        res.json({
            success: true, 
            message: listaDevices
        })
    } catch {
        res.json({
            success: false, 
            message: "Não foi possível listar os devices"
        })
    }


})

router.post('/', async (req, res)=>{
    const novoDevice = new Device({
        nome: req.body.nome,
        kwh: req.body.kwh,
        corrente: req.body.corrente,
        voltagem: req.body.voltagem,
        fp: req.body.fp
    })
    try {
        const saveNovoDevice = await novoDevice.save()
        res.json({
            success: true, 
            message: saveNovoDevice
        })
    }
    catch {
        res.json({
            success: false,
            message: "Não foi possível cadastrar novo device"
        })

    }

})

module.exports = router