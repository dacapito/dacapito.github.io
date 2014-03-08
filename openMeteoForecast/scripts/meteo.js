var obj=Object(); 
function meteoGet(obj){
	var i = document.getElementById("form1").elements[0].value;
	document.getElementById("hum").innerHTML=(obj.rh[i]);
	document.getElementById("temp").innerHTML=(obj.temp[i]);
	document.getElementById("prec").innerHTML=(obj.precipitations[i]);
	document.getElementById("lowCl").innerHTML=(obj.low_clouds[i]);
	document.getElementById("medCl").innerHTML=(obj.medium_clouds[i]);
	document.getElementById("hiCl").innerHTML=(obj.high_clouds[i]);
	var wDirDeg = obj.wind_10m_ground_dir[i];
	document.getElementById("wiDir").innerHTML=(wDirDeg);
	var wSpKmh = Math.round(obj.wind_10m_ground_speed[i] * 36)/10;
	document.getElementById("wiSp").innerHTML=(wSpKmh);
	var d = new Date( obj.times[i]*1000 );
	var n = d.toString();
	document.getElementById("time").innerHTML=(n);
}
function changeData(){
	location.reload();
}