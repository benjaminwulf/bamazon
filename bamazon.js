var mysql = require('mysql');
var inquirer = require('inquirer');
var Table = require('cli-table');

var connection = mysql.createConnection({
    host: 'localhost',
    port: '3306',

    user: 'root',
    password: 'Peruluv2',

    database: 'bamazon_DB'
});

connection.connect(function (err) {
    if (err) throw (err);

    createTable();
});

var purchaseTotal = 0;

function createTable() {
    var table = new Table({
        head: ['item_id', 'product_name', 'department_name', 'price', 'stock_quantity']
    })
    connection.query('SELECT * FROM products', function (err, res) {
        if (err) throw (err);
        for (var i = 0; i < res.length; i++) {
            table.push([
                res[i].item_id,
                res[i].product_name,
                res[i].department_name,
                res[i].price,
                res[i].stock_quantity
            ])
        }
        console.log(table.toString());
        startPrompt();
    })
}

function startPrompt() {
    var promptCustomer = [{
            name: "item",
            type: "input",
            message: "What item_id would you like to [BUY].",
            validate: function (value) {
                if (isNaN(value) === false) {
                    return true;
                } else {
                    return false;
                }
            }
        },
        {
            name: "quantity",
            type: "input",
            message: "What [QUANTITY] would you like to buy.",
            validate: function (value) {
                if (isNaN(value) === false) {
                    return true;
                } else {
                    return false;
                }
            }
        }
    ];

    inquirer.prompt(promptCustomer).then(function (answer) {
        var qCustomer = answer.quantity;
        var idCustomer = answer.item;
        
        connection.query('SELECT * FROM products', function (err, res) {
        
        if (err) throw (err);

        var itemIdLeft = res[0].stock_quantity;
        console.log(itemIdLeft);
        var itemIdPrice = res[0].price;
        console.log(itemIdPrice);
        var newStockQuantity = itemIdLeft - qCustomer;
        console.log(newStockQuantity);
        var total = itemIdPrice * qCustomer
        console.log(total);
        // })

        if (newStockQuantity > -1) {
            //   \/\/ to concat thing
            console.log('');
            console.log(`Your new ${item_id} now has ${stock_quantity} for $ ${total}`);
            console.log('');

            // UPDATE DB
            connection.query("UPDATE products SET ? WHERE ?", function (err, res) {
                if (err) throw (err);

                [{
                    stock_quantity: newStockQuantity
                    },
                    {
                    item_id: idCustomer
                    }
                ]
                console.log(table.toString());
            })
         } else {
            console.log("")
            console.log("Sorry, not enough stock quanity to fulfill order.")
            console.log("")
            }
        })
    })
};