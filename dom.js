function createRndCode(){
	var arr=['1','2','3','4','5','a','b','c','d','e'];
	var yzm="";
	for (var i = 0; i < 3; i++) {
	var	xb=Math.floor(Math.random()*(arr.length-1));
		yzm+=arr[xb];	
	}
	document.getElementById("code").innerHTML=yzm;
}