# bamazon
This is a online store that is sells golf clubs

function isThereEnough(sku,quantity){
    connection.query("SELECT quantity, price FROM products WHERE product_name = ?",[sku],function(err,results){
        if(err) throw err;
        // console.log(quantity);
        let skuLeft = results[0].quantity;
        // console.log(skuleft);
        let skuPrice = results[0].price;
        // console.log(skuPrice);
        let newInventory = skuLeft - quantity;
        // console.log(newInventory);
        let total = skuPrice * quantity;
        if (newInventory > -1){
                //   my btother-in-law taught me this \/ \/ it's so much easier to concat things
                console.log("")
            console.log(`Congrats on your new ${sku} you now have ${quantity} of them for $ ${total}`);
                console.log("")
            // changes to the DB 
            updateDB(newInventory,sku);
        }else {
            console.log("")
            console.log("Tough luck buddy, we're out or don't have enough to fill the order.")
            console.log("")
            againPrompt();
        }
    })
}