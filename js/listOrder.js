var orders= [
];
var $listOrder = document.getElementById('listorder');
function saveChange() {
  localStorage.setItem('listOrder', JSON.stringify(orders));
}

function loadOrder() {
  orders = JSON.parse(localStorage.getItem('listOrder'));
  }
if (localStorage.getItem("listOrder") !== null) {
loadOrder();
}
function removeOrder(id){
	return orders.splice(id,1);
}
var listLocalOrder = function () {
	var order = "";
    for (var i in orders) {
		  var data = JSON.parse(JSON.stringify(orders[i]));
        var order = '<tr>';
	      order += '<td>'+data.id+'</td>';
	      order += '<td><a href="detailOrder.html?id='+data.id+'">'+data.ordername+'</a></td>';
	      order += '<td>'+data.customername+'</td>';
	      order += '<td>'+data.quantity+'</td>';
	      order += '<td>'+data.status+'</td>';
	      order += '<td><button type="button" class="btn-style btnDelete mr-2" data-id='+data.id+'><i class="fas fa-trash-alt"></i></button>';
        order += '<button type="button" class="btn-style btnEdit" data-id='+data.id+'><i class="fas fa-edit"></i></button>';  
	      order += '</td>';
	      order += '</tr>';
	      $listOrder.innerHTML += order; 
    }
    saveChange();	
}
listLocalOrder();
var  $btnDelete = document.getElementsByClassName("btnDelete");
$btnDelete=Array.from($btnDelete);
for (let i =0 ; i < $btnDelete.length; i++) {
	$btnDelete[i].addEventListener('click',function(){
		$id= $btnDelete[i].getAttribute('data-id');
		if(confirm("Are you want to delete ?")){
        setTimeout(function(){
        	if(orders.length===1){
        		orders= [];
        	}
        	else {
        		removeOrder($id-1);
        	}
        	saveChange();
         window.location.reload();
       },1000);
      }
	});
}
var  $btnEdit = document.getElementsByClassName("btnEdit");
$btnEdit=Array.from($btnEdit);
for (let i =0 ; i < $btnEdit.length; i++) {
	$btnEdit[i].addEventListener('click',function(){
		$id= $btnEdit[i].getAttribute('data-id');
		if(confirm("Are you want to edit ?")){
        setTimeout(function(){
         window.location.href = 'editOrder.html?id='+$id;
       },1000);
      }
	});
}

