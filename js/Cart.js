var shoppingCart = (function() {
  cart = [];

  function itemCart(id, title, image, price, quantity) {
    this.id = id;
    this.title = title;
    this.image = image;
    this.price = price;
    this.quantity = quantity;
  }
  

// Lưu dữ liệu vào Session Storage
function saveCart() {
  sessionStorage.setItem('Cart', JSON.stringify(cart));
}


// Lấy dữ liệu trong mảng từ Session ra
function loadCart() {
  cart = JSON.parse(sessionStorage.getItem('Cart'));
}
if (sessionStorage.getItem("Cart") != null) {
  loadCart();
}



var obj = {};
  // List cart
  obj.listCart = function() {
    var cartCopy = [];
    for(i in cart) {
      item = cart[i];
      itemCopy = {};
      for(p in item) {
        itemCopy[p] = item[p];

      }
      cartCopy.push(itemCopy)
    }
    return cartCopy;
  }

    // Count cart 
    obj.totalCount = function() {
      var totalCount = 0;
      for(var item in cart) {
        totalCount += cart[item].quantity;
      }
      return totalCount;
    }

  // Thêm sản phẩm vào giỏ hàng
  obj.addItemToCart = function(id, title, image, price, quantity) {
    for(var item in cart) {
      if(cart[item].id === id) {
        cart[item].quantity ++;
        saveCart();
        return;
      }
    }
    var item = new itemCart(id, title, image, price, quantity);
    cart.push(item);
    saveCart();
  }

// xóa từng (MỘT) sản phẩm từ giỏ hàng
  obj.removeItemFromCart = function(id) {
    for(var item in cart) {
      if(cart[item].id === id) {
        cart[item].quantity --;
        if(cart[item].quantity === 0) {
          cart.splice(item, 1);
        }
      break;
      }
    }
  saveCart();
  }
return obj;
})();

//Hiển thị Cart
var $listCart=  document.getElementById("listcart");
function displayCart() {
  var cartArray = shoppingCart.listCart();
  var itemCart = "";
  for(var i in cartArray) {
    itemCart += "<tr>"
      + "<td>" + cartArray[i].id + "</td>" 
      + "<td>" + cartArray[i].title + "</td>"
      + "<td><img style='width: 100px;' src='" + cartArray[i].image + "' alt='product-image'/></td>"  
      + "<td>€" + cartArray[i].price+"</td>"
      + "<td>" + cartArray[i].quantity+"</td>"
      + "<td><button class='delete-item' data-id='" + cartArray[i].id + "' data-title=" + cartArray[i].title + "><i class='fa fa-trash-o' aria-hidden='true'></i></button></td>"
      +  "</tr>";
  }
  $listCart.innerHTML += itemCart;
}
if($listCart){
displayCart();
}
var $counterCart = document.getElementById('counter-cart');
var $btnAddToCart = document.getElementsByClassName('add-to-cart');
$btnAddToCart = Array.from($btnAddToCart);
var $btnDeleteItemCart = document.getElementsByClassName('delete-item');
$btnDeleteItemCart = Array.from($btnDeleteItemCart);
console.log($btnAddToCart);
console.log($btnDeleteItemCart);
if($btnAddToCart){
  var loopAdd = function loopAdd(i) {
    $btnAddToCart[i].addEventListener('click',function(){
    var id = $btnAddToCart[i].getAttribute('data-index');
    var title = $btnAddToCart[i].getAttribute('data-title');
    var price = $btnAddToCart[i].getAttribute('data-price');
    var image = $btnAddToCart[i].getAttribute('data-image');
      shoppingCart.addItemToCart(id,title,image,price,1);
      window.location.href = "listProduct.html";
    });
  };
  for(var i=0; i < $btnAddToCart.length; i++){
  loopAdd(i);
}
}

$counterCart.innerText += shoppingCart.totalCount();
if($btnDeleteItemCart){
  var loopDelete = function loopDelete(i) {
    $btnDeleteItemCart[i].addEventListener('click',function(e){
      e.preventDefault();
      var id =$btnDeleteItemCart[i].getAttribute('data-id');
      if(confirm("Are you want to delete ?")){
        setTimeout(function(){
         shoppingCart.removeItemFromCart(id);
         window.location.href = "cart.html";
       },1000);
      }
    });
  };
  for(var i =0 ; i < $btnDeleteItemCart.length; i++){
  loopDelete(i);
}
}


