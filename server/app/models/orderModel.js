const { poolPromise } = require('../../config/database')

// SQL query to retrieve order details along with customer and book information
const orderQuery = `SELECT o.OrderId, 
                            od.OrderDetailId,
                            c.CustomerId,
                            b.Title,
                            c.Name AS CustomerName,
                            a.Name AS AuthorName,
                            o.OrderDate,
                            b.Price,
                            od.Subtotal,
                            od.Quantity  
                            
                        FROM Orders o
                        INNER JOIN 
                            Customers c ON o.CustomerId = c.CustomerId
                        INNER JOIN 
                            OrderDetails od ON o.OrderId = od.OrderId
                        INNER JOIN 
                            Books b ON od.BookId = b.BookId
                        INNER JOIN 
                             Authors a ON b.AuthorId= a.AuthorId;`

// Executing the query and retrieves data asynchronously
exports.read = async () => {
    const pool = await poolPromise;
    const rs = await pool
        .request()
        .query(orderQuery)
    return rs.recordset;
}

