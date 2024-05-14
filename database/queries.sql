--Get all books by a specific author
SELECT b.Title, a.Name AS Author
FROM Books b
INNER JOIN Authors a ON b.AuthorId = a.AuthorId
WHERE a.Name = 'Author_Name'; -- Replace 'Author_Name' with the specific author's name

--Get the total number of books sold
SELECT SUM(od.Quantity) AS TotalBooksSold
FROM OrderDetails od;

--Get the total revenue generated from orders
SELECT SUM(o.TotalAmount) AS TotalRevenueGenerated
FROM Orders o;

--Get the top 5 best-selling books
SELECT TOP 5 b.Title, SUM(od.Quantity) AS TotalQuantitySold
FROM Books b
INNER JOIN OrderDetails od ON b.BookId = od.BookId
GROUP BY b.Title
ORDER BY TotalQuantitySold DESC;

--Get the customers who have spent the most
SELECT c.Name, SUM(o.TotalAmount) AS TotalSpent
FROM Customers c
INNER JOIN Orders o ON c.CustomerId = o.CustomerId
GROUP BY c.Name
ORDER BY TotalSpent DESC;
