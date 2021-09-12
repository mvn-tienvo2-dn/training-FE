var $btnToggle = document.getElementById('btnToggle');
var $sidebar = document.getElementById('sidebar'); 
let click = false;
console.log($btnToggle);
if($btnToggle){
	$btnToggle.addEventListener('click',function(){
		if(click===false){
		console.log(click);
		$sidebar.style.display = 'block';
		click= true;
	}
	else {
		$sidebar.style.display = 'none';
		click= false;
	}
	});
}

