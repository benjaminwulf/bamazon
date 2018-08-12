CREATE database bamazon_DB;
use bamazon_DB;

CREATE table products (
item_id INTEGER NOT NULL AUTO_INCREMENT,
product_name VARCHAR (50) NOT NULL,
department_name VARCHAR (50) NOT NULL,
price INTEGER default 0,
stock_quantity INTEGER default 0,
primary KEY (item_id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('PING PAL Complete Set', 'Golf', 259, 1),
('PING MOXIE Blue Complete Set', 'Golf', 359, 1),
('PING MOXIE Orange 9, SW, Putter Partial Set', 'Golf', 159, 2),
('MIZUNO MP 52 3-PW Complete Set', 'Golf', 359, 1),
('Powerbilt Orange Youth Age 3-5 Carry Bag', 'Golf', 79, 1),
('Wilson Staff Duo Orange 12 Count', 'Golf Balls', 19, 50),
('Wilson Staff Duo Blue 12 Count', 'Golf Balls', 19,30),
('Wilson Staff Duo Green 12 Count', 'Golf Balls', 19, 10),
('Wilson Staff Duo Yellow 12 Count', 'Golf Balls', 19, 20),
('Wilson Staff Duo Red 12 Count', 'Golf Balls', 19, 10)
