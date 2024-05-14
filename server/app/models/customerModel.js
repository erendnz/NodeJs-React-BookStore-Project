const { poolPromise } = require('../../config/database')

// SQL query to retrieve customer informations
const customerQuery = `SELECT * FROM CUSTOMERS`;

// Executing the query and retrieves data asynchronously
exports.read = async () => {
    const pool = await poolPromise;
    const rs = await pool
        .request()
        .query(customerQuery)

    return rs.recordset;
}

