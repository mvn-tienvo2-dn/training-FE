var url = window.location.href;
url = new URL (url);
var id =url.searchParams.get('id');
id=parseInt(id);
console.log(id);
var orders = JSON.parse(localStorage.getItem('listOrder'));
console.log(orders);
function getOrder(){
var getOrder = '';
for(let i = 0 ; i < orders.length; i++) {
	if(orders[i].id===id){
		getOrder=orders[i];
	}
}
return getOrder;
}
console.log(getOrder());
function setOrderForm(){
	document.getElementById('ordername').value = getOrder().ordername;
	document.getElementById('customername').value = getOrder().customername;
	document.getElementById('quantity').value = getOrder().quantity;
	document.getElementById('total').value = getOrder().total;
	document.getElementById('address').value = getOrder().address;
	document.getElementById('status').value = getOrder().status;
	document.getElementById('productname').value = getOrder().productname;
	document.getElementById('date').value = getOrder().create_at;

}
setOrderForm();
var $btnEditOrder= document.getElementById('btnSubEdit');
$btnEditOrder.addEventListener('click', function() {
var order = {
	id:id,
	ordername:document.getElementById("ordername").value,
	customername:document.getElementById("customername").value,
	total:document.getElementById('total').value,
	quantity:document.getElementById('quantity').value,
	address:document.getElementById('address').value,
	create_at:document.getElementById('date').value,
	productname:document.getElementById('productname').value,
	status:document.getElementById('status').value

};
  orders[id-1] = order;
localStorage.setItem('listOrder',JSON.stringify(orders));
window.location.href="managerOrder.html";
});

