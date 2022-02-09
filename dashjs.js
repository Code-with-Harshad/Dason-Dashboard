
var current_accord_open = ""
function accord1(main,content,arrow){
	var data = document.getElementsByClassName('content');
	var icons = document.getElementsByClassName('iconing');
	var sub_menu = document.getElementsByClassName('sub_menu');
	var id2 = document.getElementById('content13');
	var id3 = document.getElementById('content14');

for(i=0;i<data.length;i++){
		data[i].style.height = "0px";
		icons[i].style.transform = "rotate(0deg)";
		sub_menu[i].className = "sub_menu sub_every"
}
	if(main.classList != "active_accord" && current_accord_open!=content.id){
		content.style.height = "fit-content";
		arrow.style.transform = "rotate(90deg)";
		main.className += " active_accord";
		current_accord_open = content.id;
	}
	// if(id2.style.classList != 'active_accord'){
	// 	id3.style.height = '0px'
	// }
	else{
		content.style.height = "0px";
		arrow.style.transform = "rotate(0deg)";
		main.className = "sub_menu sub_every"
		current_accord_open = ""
	}
}

function accord2(here){
	var id = document.getElementById('content14');
	var icon = document.getElementById('icon14');

	if(id.style.height != 'fit-content'){
	id.style.height = "fit-content";
	icon.style.transform = "rotate(90deg)";
	}
	else{
		id.style.height = '0px';
	icon.style.transform = "rotate(0deg)";
	}
}

var current_navbar_open = ""
function flag(here,flags,btn){
	var data = document.getElementsByClassName('calling');
	var divs = document.getElementsByClassName('flags');
for(i=0;i<data.length;i++){
	data[i].style.display = "none";
	divs[i].style.backgroundColor = "";
}
	if(flags.style.display != "block" && current_navbar_open != flags && here!=null){
	flags.className += " bring";
	flags.style.display = "block";
	btn.style.backgroundColor = "#288AEF";
	current_navbar_open = flags;
	}
	else if(here!=null){
	flags.style.display = "none"
	btn.style.backgroundColor = ""
	current_navbar_open = ""
	}
}

	var canvas = document.getElementById('off_canvas');
	var main_body = document.getElementsByClassName('products_page');
	var footer = document.getElementsByClassName('footer')[0];
function open_canvas(n,flags){
	var logo_head = document.getElementsByClassName('logo-text')[0];
	if(canvas.className != "off_canvas transform"){
	canvas.className += " transform";
	logo_head.style.display = "none";
	n.style.marginLeft = "20px";
	for(var i=0;i<main_body.length;i++){
	main_body[i].style.padding = "90px 0px 0px 67px";
	// footer.style.padding = "20px 12px 20px 100px"
	}

	}
	else{
		canvas.className = "off_canvas";
		logo_head.style.display = "block";
		n.style.marginLeft = "80px";
	for(var i=0;i<main_body.length;i++){
	main_body[i].style.padding = "90px 0px 0px 240px";
	// footer.style.padding = "20px 12px 20px 256px"
}
	}
}

	var pages1 = document.getElementById('products_page1');
	var pages2 = document.getElementById('products_page2');
	var pages3 = document.getElementById('products_page3');

	function open_page(here,pages,icon){
	var all_pages = document.getElementsByClassName('products_page');
	var three = document.getElementsByClassName('same_col');

	for(var i=0;i<all_pages.length;i++){
		all_pages[i].style.display = "none";
		three[i].style.color = "#495057";
	document.getElementsByClassName('menu_icon')[i].className += ' add_filter';
	}
	document.getElementById(pages).style.display = "block";
	here.style.color = "#1C84EE";
	document.getElementById(icon).className = "menu_icon"
	}

function open_canvas2(n){
	var logo_head = document.getElementsByClassName('logo-text')[0]
	if(canvas.className != "off_canvas transform2"){
	canvas.className += " transform2";
	}
	else{
		canvas.className = "off_canvas";
	}
}
	var sub = document.getElementsByClassName('show_sub');

function fun1(){
	for(var i in sub){
		sub[i].style.display= "block"
	}
}

function fun2(){
	for(var i in sub){
		sub[i].style.display= "none"
	}

}

	var all_out = document.getElementById('black_div');
function setting(here,set_canvas){
		set_canvas.className = "setting_offcanvas trans";
		all_out.style.display = "block";
		flag(null,null,null)
}
function close_off(here,set_canvas2){
	set_canvas2.className = "setting_offcanvas trans2";
		all_out.style.display = "none";
}
function every_closure(here,set){
	set.className = "setting_offcanvas trans2";
	all_out.style.display = "none";
}

function del(here,row){
	row.style.display = "none";
}
function ac_tab(here,id){
	var tabs = document.getElementsByClassName('tabs_all');
	var com_tab = document.getElementsByClassName('com_tab');

	for(var i=0;i<tabs.length;i++){
		tabs[i].style.display = "none";
		com_tab[i].style.color = "#495057";
		com_tab[i].style.backgroundColor = "white"
	}
	document.getElementById(id).style.display = "block";
	here.style.color = "white";
	here.style.backgroundColor = '#1C84EE';
}


