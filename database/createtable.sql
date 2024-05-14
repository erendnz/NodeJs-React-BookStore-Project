-- Create Authors table
CREATE TABLE Authors (
    AuthorId INT PRIMARY KEY,
    Name VARCHAR(100),
    OtherDetails VARCHAR(1000)
);

-- Create Books table
CREATE TABLE Books (
    BookId INT PRIMARY KEY,
    Title VARCHAR(255),
    AuthorId INT,
    Price DECIMAL(10, 2),
    QuantityAvailable INT,
    FOREIGN KEY (AuthorId) REFERENCES Authors(AuthorId)
);

-- Create Customers table
CREATE TABLE Customers (
    CustomerId INT PRIMARY KEY,
    Name VARCHAR(100),
    Email VARCHAR(255),
    Address VARCHAR(255)
);

-- Create Orders table
CREATE TABLE Orders (
    OrderId INT PRIMARY KEY,
    CustomerId INT,
    OrderDate DATETIME,
    TotalAmount DECIMAL(10, 2),
    FOREIGN KEY (CustomerId) REFERENCES Customers(CustomerId)
);

-- Create OrderDetails table
CREATE TABLE OrderDetails (
    OrderDetailId INT PRIMARY KEY,
    OrderId INT,
    BookId INT,
    Quantity INT,
    Subtotal DECIMAL(10, 2),
    FOREIGN KEY (OrderId) REFERENCES Orders(OrderId),
    FOREIGN KEY (BookId) REFERENCES Books(BookId)
);



INSERT INTO Authors (AuthorId, Name, OtherDetails) VALUES
(1, 'J.K. Rowling', 'England, Total of 7 books'),
(2, 'George Orwell', 'England, Total of 6 books'),
(3, 'Agatha Christie', 'England, Total of 66 books'),
(4, 'Tolkien', 'England, Total of 15 books'),
(5, 'Stephen King', 'USA, Total of 63 books'),
(6, 'Haruki Murakami', 'Japan, Total of 14 books'),
(7, 'Paulo Coelho', 'Brazil, Total of 30 books'),
(8, 'Jane Austen', 'England, Total of 7 books'),
(9, 'Charles Dickens', 'England, Total of 20 books'),
(10, 'Leo Tolstoy', 'Russia, Total of 10 books');


INSERT INTO Books (BookId, Title, AuthorId, Price, QuantityAvailable) VALUES
(1, 'Oliver Twist', 9, 12.99, 50),
(2, 'The Old Curiosity Shop', 9, 14.99, 60),
(3, 'A Tale of Two Cities', 9, 16.99, 70),
(4, 'Harry Potter and the Chamber of Secrets', 1, 9.99, 80),
(5, 'Animal Farm', 2, 11.99, 90),
(6, 'The Man in the Brown Suit', 3, 19.99, 100),
(7, 'The Hobbit', 4, 14.99, 110),
(8, 'The Shining', 5, 10.99, 120),
(9, 'Kafka on the Shore', 6, 12.99, 130),
(10, 'The Alchemist', 7, 11.99, 140),
(11, 'Persuasion', 8, 13.99, 150),
(12, 'Pride and Prejudice', 8, 15.99, 160),
(13, '1984', 2, 17.99, 170);



INSERT INTO Customers (CustomerId, Name, Email, Address) VALUES 
(1, 'Jon Bon Jovi', 'jb@example.com', '123 Main St, City'),
(2, 'Bob Dylan', 'bob@example.com', '456 Elm St, Town'),
(3, 'Jim Morrison', 'jim@example.com', '789 Oak St, Village'),
(4, 'Johnny Cash', 'cash@example.com', '101 Pine St, Hamlet'),
(5, 'Eddie Vedder', 'evedder@example.com', '202 Maple St, County'),
(6, 'Bruce Spingsteen', 'bsprteen@example.com', '303 Birch St, District'),
(7, 'Robert Plant', 'robertzeppelin@example.com', '404 Cedar St, State'),
(8, 'Neil Young', 'neilyoung@example.com', '505 Walnut St, Province'),
(9, 'Axl Rose', 'axl@example.com', '606 Spruce St, Country'),
(10, 'John Lennon', 'john@example.com', '707 Poplar St, Kingdom');



INSERT INTO Orders (OrderId, CustomerId, OrderDate, TotalAmount) VALUES 
(1, 1, '2024-06-10 10:38:00', 31.97),
(2, 2, '2024-01-14 11:45:00', 59.97),
(3, 3, '2024-05-10 13:15:00', 36.97),
(4, 4, '2024-05-19 14:24:00', 12.99),
(5, 5, '2024-07-10 15:40:00', 61.95),
(6, 6, '2024-02-02 09:56:00', 31.98),
(7, 7, '2024-09-09 20:30:00', 17.99),
(8, 1, '2024-04-10 16:55:00', 12.99),
(9, 1, '2024-03-02 10:52:00', 11.99),
(10, 2, '2024-05-14 13:21:00', 31.98);



INSERT INTO OrderDetails (OrderDetailId, OrderId, BookId, Quantity, Subtotal) VALUES 
(1, 1, 4, 2, 19.98),
(2, 1, 5, 1, 11.99),
(3, 2, 6, 3, 59.97),
(4, 3, 7, 1, 14.99),
(5, 3, 8, 2, 21.98),
(6, 4, 9, 1, 12.99),
(7, 5, 10, 4, 47.96),
(8, 5, 11, 1, 13.99),
(9, 6, 12, 2, 31.98),
(10, 7, 13, 1, 17.99),
(11, 8, 9, 1, 12.99),
(12, 9, 5, 1, 11.99),
(13, 10, 12, 2, 31.98);
