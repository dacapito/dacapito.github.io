var obj=Object(); 
var grh = new Array();
var gtemp = new Array();
var gprecipitations = new Array();
var glow_clouds = new Array();
var gmedium_clouds = new Array();
var ghigh_clouds = new Array();
var gwind_10m_ground_dir = new Array();
var gwind_10m_ground_speed = new Array();
var gtimes = new Array();

function meteoGet(obj){
	grh=obj.rh;
	gtemp=obj.temp;
	gprecipitations=obj.precipitations;
	glow_clouds=obj.low_clouds;
	gmedium_clouds = obj.medium_clouds;
	ghigh_clouds=obj.high_clouds;
	gwind_10m_ground_dir = obj.wind_10m_ground_dir;
	gwind_10m_ground_speed = obj.wind_10m_ground_speed;
	gtimes = obj.times;
}

function hourGet(){
	var i = document.getElementById("form1").elements[0].value;
	document.getElementById("hum").innerHTML=(grh[i]);
	document.getElementById("temp").innerHTML=(gtemp[i]);
	document.getElementById("prec").innerHTML=(gprecipitations[i]);
	document.getElementById("lowCl").innerHTML=(glow_clouds[i]);
	document.getElementById("medCl").innerHTML=(gmedium_clouds[i]);
	document.getElementById("hiCl").innerHTML=(ghigh_clouds[i]);
	var wDirDeg = gwind_10m_ground_dir[i];
	document.getElementById("wiDir").innerHTML=(wDirDeg);
	var wSpKmh = Math.round(gwind_10m_ground_speed[i] * 36)/10;
	document.getElementById("wiSp").innerHTML=(wSpKmh);
	var d = new Date( gtimes[i]*1000 );
	var n = d.toString();
	document.getElementById("time").innerHTML=(n);
}