$('document').ready(function(){
    loadGoods();
});

function loadGoods() {
    //Загрузка товаров на страницу
    $.getJSON('goods.json', function (data) {
        console.log(data);
    })
}