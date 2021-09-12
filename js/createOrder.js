var orders = JSON.parse(localStorage.getItem('listOrder'));
var ordersLength = orders.length;
var $btnCreateOrder= document.getElementById('btnSubCreate');
$btnCreateOrder.addEventListener('click', function() {
var order = {
	id:ordersLength + 1,
	ordername:document.getElementById("ordername").value,
	customername:document.getElementById("customername").value,
	total:document.getElementById('total').value,
	quantity:document.getElementById('quantity').value,
	address:document.getElementById('address').value,
	create_at:document.getElementById('date').value,
	productname:document.getElementById('productname').value,
	status:document.getElementById('status').value

};
orders.push(order);
localStorage.setItem('listOrder',JSON.stringify(orders));
window.location.href="managerOrder.html";
});

