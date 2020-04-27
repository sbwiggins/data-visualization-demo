const sql = require('mssql')
const execute = require('./database-service').execute


const listRelateTypes = async () =>
    await execute(`[dbo].[usp_list_relate_types]`)

const listArchitecturesByLastModifiedDate = async () =>
    await execute(`[dbo].[usp_lst_architectures_by_last_modified_date]`)

const listRelatedArchitecturesById = async (architectureId) =>
    await execute(`[dbo].[usp_list_related_architectures_by_id]  @architecture_id = ${architectureId}`)

const listRelatedArchitecturesByKey = async (architectureId, relatedArchitectureId) =>
    await execute(`[dbo].[usp_list_related_architectures_by_key]  
                    @architecture_id = ${architectureId},  
                    @related_architecture_id = ${relatedArchitectureId}`)

const insertIntoRelatedArchitectures = async (architectureId, relatedArchitectureId, relateTypeId) =>
    await execute(`[dbo].[usp_insert_into_related_architectures]  
                    @architecture_id = ${architectureId},  
                    @related_architecture_id = ${relatedArchitectureId},
                    @relate_type_id = ${relateTypeId}`)

const updateRelatedArchitectures = async (architectureId, relatedArchitectureId, relateTypeId) =>
    await execute(`[dbo].[usp_update_related_architectures]  
                    @architecture_id = ${architectureId},  
                    @related_architecture_id = ${relatedArchitectureId},
                    @relate_type_id = ${relateTypeId}`)

const deleteFromRelatedArchitectures = async (architectureId, relatedArchitectureId) =>
    await execute(`[dbo].[usp_delete_from_related_architectures]  
                    @architecture_id = ${architectureId},  
                    @related_architecture_id = ${relatedArchitectureId}`)


module.exports.listRelatedArchitecturesById = listRelatedArchitecturesById
module.exports.listRelatedArchitecturesByKey = listRelatedArchitecturesByKey
module.exports.insertIntoRelatedArchitectures = insertIntoRelatedArchitectures
module.exports.updateRelatedArchitectures = updateRelatedArchitectures
module.exports.deleteFromRelatedArchitectures = deleteFromRelatedArchitectures
module.exports.listRelateTypes = listRelateTypes
module.exports.listArchitecturesByLastModifiedDate = listArchitecturesByLastModifiedDate