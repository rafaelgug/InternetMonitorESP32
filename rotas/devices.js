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

router.put('/:id', async (req, res)=>{
    try{
        const updateDevideId = await Device.updateOne(
            {_id: req.params.id},
            {kwh: req.body.kwh,
                corrente: req.body.corrente,
                voltagem: req.body.voltagem,
                fp: req.body.fp}

        )
        res.json({
            success: true, 
            updated: updateDevideId.nModified
        })
    }
    catch(err) {
        res.json({
            success: false,
            message: "Não foi possível atualizar novo device"
        })
    }
})

router.delete('/:id', async (req, res)=>{
    try{
        const deleteDevideId = await Device.deleteOne({
            _id: req.params.id
        })
        res.json({
            success: true, 
            data: deleteDevideId
        })
    }
    catch(err) {
        res.json({
            success: false,
            message: "Não foi possível deletar device"
        })
    }
})

module.exports = router