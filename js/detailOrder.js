var url = window.location.href;
url = new URL (url);
var id =url.searchParams.get('id');
id=parseInt(id);
console.log(id);
var orders = JSON.parse(localStorage.getItem('listOrder'));
console.log(orders);
var $detailOrder = document.getElementById('detailorder');
function getOrder(){
var getOrder = '';
for(let i = 0 ; i < orders.length; i++) {
	if(orders[i].id===id){
		getOrder=orders[i];
	}
}
return getOrder;
}
function detailOrder() {
	var order= "";
	order = '<div class="col-6 col-sm-6 col-md-6"><p><span>Order Name : </span></p>';
	order += '<p><span>Customer Name : </span></p>';
	order += '<p><span>Product Name : </span></p>';
	order += '<p><span>Quantity : </span></p>';
	order += '<p><span>Total : </span></p>';
	order += '<p><span>Address : </span></p>';
	order += '<p><span>Status : </span></p>';
	order += '<p><span>Date Order : </span></p></div>';
	order += '<div class="col-6 col-sm-6 col-md-6"><p>'+getOrder().ordername+'</p>';
	order += '<p>'+getOrder().customername+'</p>';
	order += '<p>'+getOrder().productname+'</p>';
	order += '<p>'+getOrder().quantity+'</p>';
	order += '<p>'+parseInt(getOrder().total).toLocaleString('vi-VN')+' VND</p>';
	order += '<p>'+getOrder().address+'</p>';
	order += '<p>'+getOrder().status+'</p>';
	order += '<p>'+getOrder().create_at+'</p></div>';
	$detailOrder.innerHTML += order; 
}
detailOrder();

