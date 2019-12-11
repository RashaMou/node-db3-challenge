-- Multi-Table Query Practice
-- Display the ProductName and CategoryName for all products in the database. Shows 77 records.
--
SELECT
  P.ProductName,
  C.CategoryName
from Product as P
JOIN Category as C ON P.categoryid = C.Id --
  -- Display the order Id and shipper CompanyName for all orders placed before August 9 2012. Shows 429 records.
  --
SELECT
  id AS order_id,
  companyName AS shipper
FROM [Order] AS O
JOIN Shipper ON O.ShipVia = Shipper.id
WHERE
  O.orderdate < '2012-08-09' --
  -- Display the name and quantity of the products ordered in order with Id 10251. Sort by ProductName. Shows 3 records.
  --
SELECT
  OD.Quantity,
  P.ProductName
FROM OrderDetail AS OD
JOIN Product AS P ON OD.ProductId = P.Id
WHERE
  OD.OrderId = 10251 --
  -- Display the OrderID, Customer's Company Name and the employee's LastName for every order. All columns should be labeled clearly. Displays 16,789 records.
SELECT
  id AS order_id,
  customer.companyname,
  employee.lastname
FROM [order] AS o
JOIN Customer ON o.customerid = customer.id
JOIN employee ON o.employeeid = employee.id