var products= [
{
	id:1,
	title:'Lorem ipsum book one',
	price:4.26,
	priceold:7.1,
	image:"https://flone.reactdemo.hasthemes.com/assets/img/product/books/1.jpg",
	discount:40,
	status:'New'
},
{
	id:2,
	title:'Lorem ipsum book two',
	price:3.26,
	priceold:6.1,
	image:"https://flone.reactdemo.hasthemes.com/assets/img/product/books/2.jpg",
	discount:20,
	status:'New'
},
{
	id:3,
	title:'Lorem ipsum book three',
	price:3.62,
	priceold:6.7,
	image:"https://flone.reactdemo.hasthemes.com/assets/img/product/books/3.jpg",
	discount:40,
	status:''
},
{
	id:4,
	title:'Lorem ipsum book four',
	price:4.26,
	priceold:7.1,
	image:"https://flone.reactdemo.hasthemes.com/assets/img/product/books/5.jpg",
	discount:40,
	status:'New'
},
{
	id:5,
	title:'Lorem ipsum book five',
	price:4.26,
	priceold:7.1,
	image:"https://flone.reactdemo.hasthemes.com/assets/img/product/books/5.jpg",
	discount:40,
	status:'New'
},
{
	id:6,
	title:'Lorem ipsum book six',
	price:4.26,
	priceold:7.1,
	image:"https://flone.reactdemo.hasthemes.com/assets/img/product/books/6.jpg",
	discount:20,
	status:''
},
{
	id:7,
	title:'Lorem ipsum book seven',
	price:4.26,
	priceold:7.1,
	image:"https://flone.reactdemo.hasthemes.com/assets/img/product/books/7.jpg",
	discount:10,
	status:'New'
},
{
	id:8,
	title:'Lorem ipsum book eight',
	price:4.26,
	priceold:7.1,
	image:"https://flone.reactdemo.hasthemes.com/assets/img/product/books/8.jpg",
	discount:30,
	status:'New'
},

];

var $listProduct = document.getElementById('productlist');
function saveChange() {
  localStorage.setItem('listProduct', JSON.stringify(products));
}

function loadProduct() {
  products = JSON.parse(localStorage.getItem('listProduct'));
  }
if (localStorage.getItem("listProduct") !== null) {
loadProduct();
}
var listLocalProduct = function () {
	var product = "";
    for (var i in products) {
		  var data = JSON.parse(JSON.stringify(products[i]));
        var product = '<li class="product-item">';
	      product += '<div class="product-info">';
	      product += '<div class="product-img">';
	      product += '<a href="">';
	      product += '<img src='+data.image+' alt="img-product">';
	      product += '</a>';
	      product += '<div class="product-badges">';
	      product += '<span class="badges product-discount">'+data.discount+'%</span>';
	      product += '<span class="badges product-new">'+data.status+'</span>';
	      product += '</div>';
	      product += '<div class="product-actions">';
	      product += '<ul class="product-actions-list">';
	      product += '<li>';
	      product += '<button title="Add to wishlist">';
	      product += '<i class="far fa-heart"></i>';
	      product += '</button>';
	      product += '</li>';
	      product += '<li>';
	      product += '<button title="Add to cart" class="add-to-cart" data-index="'+data.id+'" data-title="'+data.title+'" data-image="'+data.image+'" data-price="'+data.price+'">';
	      product += '<i class="fas fa-shopping-cart"></i>';
	      product += '</button>';
	      product += '</li>';
	      product += '<li>';
	      product += '<button title="Add to compare">';
	      product += '<i class="fa fa-retweet"></i>';
	      product += '</button>';
	      product += '</li>';
	      product += '<li>';
	      product += '<button title="Quick view">';
	      product += '<i class="far fa-eye"></i>';
	      product += '</button>';
	      product += '</li>';
	      product += '</ul>'
	      product += '</div>';
	      product += '</div>';
	      product += '<div class="product-content">';
	      product += '<h3 class="title"><a href="">'+data.title+'</a></h3>';
	      product += '<p class="price">€'+data.price+' -<span class="price-discount"> €'+data.priceold+'</span></p>';
	      product += '</div>';
	      product += '</div>';
	      product += '</li>';
	      $listProduct.innerHTML += product; 
    }
    saveChange();	
}
listLocalProduct();

