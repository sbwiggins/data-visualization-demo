const express = require('express')
const router = express.Router()
const architecture_service = require('../services/architecture-service')


router.get('/GetRelateTypesDropDown', async (req, res) => {
    const result = await architecture_service.listRelateTypes()
    res.status(result.status).send(result.payload)
})

router.get('/GetSelectArchitectureGridData', async (req, res) => {
    const result = await architecture_service.listArchitecturesByLastModifiedDate()
    res.status(result.status).send(result.payload)
})

router.get('/GetRelatedArchitecturesGridData/:architectureId', async (req, res) => {
    const result = await architecture_service.listRelatedArchitecturesById(req.params.architectureId)
    res.status(result.status).send(result.payload)
})

router.get('/GetRelatedArchitecturesByKey/:architectureId/:relatedArchitectureId', async (req, res) => {
    const { architectureId, relatedArchitectureId } = req.params
    const result = await architecture_service.listRelatedArchitecturesByKey(architectureId, relatedArchitectureId)
    res.status(result.status).send(result.payload)
})

router.post('/InsertRelatedArchitecturesTable', async (req, res) => {
    const { architectureId, relatedArchitectureId, relateTypeId } = req.body
    //const result = await architecture_service.insertIntoRelatedArchitectures(architectureId, relatedArchitectureId, relateTypeId)
    res.status(200).send(req.body)   //.send(result.payload)
})

router.put('/UpdateRelatedArchitecturesTable/:architectureId/:relatedArchitectureId', async (req, res) => {
    const { architectureId, relatedArchitectureId } = req.params
    const result = await architecture_service.updateRelatedArchitectures(architectureId, relatedArchitectureId, req.body.relateTypeId)
    res.status(result.status).send(result.payload)
})

router.delete('/DeleteRelatedArchitecturesTable/:architectureId/:relatedArchitectureId', async (req, res) => {
    const { architectureId, relatedArchitectureId } = req.params
    const result = await architecture_service.deleteFromRelatedArchitectures(architectureId, relatedArchitectureId)
    res.status(result.status).send(result.payload)
})



module.exports = router