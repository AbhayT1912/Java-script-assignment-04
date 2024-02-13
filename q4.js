//question 4
console.log("output 4")
function shopping () {
    let cartarray=[ ];
    function itemalreadyadded (Id){
        return cartarray.findIndex(item => item.Id === Id)
    }
    return {
        getcartitems : function () {
            return console.log(cartarray);
        },
        addtocart : function(product){
            const itemdetail = itemalreadyadded(product.Id)
            if(itemdetail != -1){
                cartarray[itemdetail].quantity++
            }
            else{
                cartarray.push({Id : product.Id, name : product.name, price:product.price, quantity : 1})
            }
        }
    }
}
const product1={Id : 1, name : "product 1",price : 10}
const product2={Id : 2, name : "product 2",price : 20}
const cart_item = shopping();
cart_item.addtocart(product1)
cart_item.addtocart(product2)
cart_item.addtocart(product2)
cart_item.getcartitems()
