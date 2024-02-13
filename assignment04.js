// question 1
console.log("output 1")
function counting(){
    let count =0;
    return function(){
        count++;
        console.log(count)
    }
}
let click = counting()
click()
click()
console.log()
//question 2
console.log("output 2")
const coustmerorder = {
    orderid : "9999",
    productname : "xxxxx",
    quantity : 5
}
const {orderid,productname,quantity}=coustmerorder;
console.log("orderid => " ,orderid)
console.log("product name => " ,productname)
console.log("Quantity => " ,quantity)
console.log()

//question 3
console.log("output 3")
function shopping () {
    let cartarray=[ ];
    return {
        getcartitems : function () {
            return console.log(cartarray);
        }
    }
}
const cart_item = shopping();
cart_item.getcartitems()

//question 6
console.log("output 6")
function createPlaylist(playlist_name){
    const playlist=[];
    return{
        addsong : function(songname, artist){
            playlist.push({songname,artist})
        },
        list_song : function(){
            console.log(playlist_name,playlist)
        }
    }
}
function addsong(playlist,songname,artist){
    playlist.addsong(songname,artist)
}
function list_song(playlist){
    playlist.list_song()
}
const myplaylist = createPlaylist("My Favourites")
addsong(myplaylist,"song 1", "artist 1")
addsong(myplaylist,"song 2", "artist 2")
addsong(myplaylist,"song 3", "artist 3")
list_song(myplaylist)








