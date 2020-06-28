

window.onload = function(){
var calculator = function(){
	
var win = document.getElementById("res");
function action(e) {
                
                var btn = e.target || e.srcElement;
                win.innerHTML+=document.getElementById(btn.id).innerHTML;			
       
 }
	
	var bin0 = document.getElementById("btn0").addEventListener("click", action);
	var bin1 = document.getElementById("btn1").addEventListener("click", action);
	var binClr = document.getElementById("btnClr");
	var binEql = document.getElementById("btnEql");
	var binSum = document.getElementById("btnSum").addEventListener("click", action);
	var binSub = document.getElementById("btnSub").addEventListener("click", action);
	var binMul = document.getElementById("btnMul").addEventListener("click", action);
	var binDiv = document.getElementById("btnDiv").addEventListener("click", action);


binClr.onclick= function(){
	win.innerHTML="";
}

binEql.onclick= function(){
	
	if (win.innerHTML.indexOf("/") > -1)
	{
		win.innerHTML=eval(win.innerHTML);
	}else{
	win.innerHTML=eval(win.innerHTML).toString(2);
	}
}	
	
}();



}