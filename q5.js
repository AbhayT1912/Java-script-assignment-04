//question 5
console.log("OUTPUT 5")
function shopping(){
    const cartarray=[]
    function checkitem (productid){
        return cartarray.findIndex(item => item.Id === productid)
    }
    return{
        getcartitem : function(){
            console.log(cartarray)
        },
        addtocart : function(product){
            const check=checkitem(product.Id)
            if(check !== -1){
                cartarray[check].quantity++
            }
            else{
                cartarray.push({Id : product.Id, name : product.name , price : product.price, quantity : 1})
            }
        },
        removeitem : function(productid){
            const itemtoremove = checkitem(productid)
            if(itemtoremove !== -1){
                cartarray.splice(itemtoremove,1)
            }
        }

    }
}
const getitem = shopping()
getitem.getcartitem()
const product1={Id : 1, name : "product 1",price : 10}
const product2={Id : 2, name : "product 2",price : 20}
getitem.addtocart(product1)
getitem.addtocart(product2)
getitem.addtocart(product1)
getitem.addtocart(product1)
getitem.getcartitem()
getitem.removeitem(2)
getitem.getcartitem()