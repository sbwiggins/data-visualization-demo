const sql = require('mssql')

const config = {
    user: 'node',
    password: 'node',
    server: 'TRADING1',
    port: 51323,
    database: 'AlphaOne',
    options: { enableArithAbort: true }
}

const execute = async (storedProcedure) => {
    try {
        await sql.connect(config)
        const data = await sql.query(`EXEC ${storedProcedure}`)
        return { status: 200, payload: data.recordset }
    }
    catch (err) {
        return { status: 400, payload: err }
    }
}

module.exports.execute = execute
