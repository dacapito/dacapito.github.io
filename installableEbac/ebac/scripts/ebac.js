function ebac() {
	
	var x=document.getElementById("ebacform");
	var wgt=x.elements[0].value;
	var ld=x.elements[1].value;
	var rd=x.elements[2].value;
	var sd=x.elements[3].value;
	var tm=x.elements[4].value;
	var gend=x.elements[5].value;
	// var gend = document.getElementById("gen").value;
	
	if (gend=="Gent"){
		var bw= 0.58;
		var mr= 0.15;
	}
	else{
		var bw= 0.49;
		var mr= 0.17;
	}
	var vol = 12.5*ld + 15.0*rd + 12.0*sd;
	var ebac = ( (0.806*vol)/(wgt*bw) ) - (tm*mr);
    ebac = Math.round(ebac*100)/100;
	if (ebac<0.0)
		{
			ebac=0;
		}
	if (ebac<0.5)
	{
		answ=answ="<div class='outmess' style='background-color:green;'> EBAC= "+ebac+" g/L, U R Clean </div>";
	}
	else if(ebac>0.5 && ebac<0.8)
	{
		answ="<div class='outmess' style='background-color:orange;'> EBAC= "+ebac+" g/L, Driving forbidden </div>";
	}
	else if(ebac>0.8 && ebac<1.5)
	{
		answ="<div class='outmess' style='background-color:red;'> EBAC= "+ebac+" g/L, Criminal offense </div>";
	}
	else if(ebac>1.5 && ebac<2.4)
	{
	   answ="<div class='outmess' style='background-color:red;'> EBAC= "+ebac+" g/L, Health Risk </div>";
	}
	else{
	   answ="<div class='outmess' style='background-color:red;'> EBAC= "+ebac+" g/L, Severe health risk </div>";
	}
	 
	//var answ="<div class='outmess' style='background-color:red;'>"+ebac+" "+vol+" "+ld+" "+rd+" "+sd+" "+wgt+" </div>";
	document.getElementById("out").innerHTML=(answ);
}