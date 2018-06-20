document.addEventListener("DOMContentLoaded", function () {

var headers = document.querySelectorAll('.li_header');
var liBodies = document.querySelectorAll('.li_body');

for (var i = 0; i<headers.length; i++) {
	let header = headers[i];
	header.addEventListener("click", function(){
		var li = header.parentElement;
		var accBody = li.querySelector('.li_body');
		var list = document.querySelectorAll('.li_body');
			for (var i = 0; i < list.length; i++) {
				list[i].style.display = 'none';
			}
		accBody.style.display = 'block';
			});
}
});