function output(){    
    var form=document.forms['mform'];
    var out=document.getElementById("out");
    var gender=form["gender"].value;
    var DD=parseInt(form["day"].value);
    var MM=form["month"].value;
    var Yr=form["year"].value;
    var CC =Yr.substring(0,2);
    var YY=Yr.substring(2,4);
    CC=parseInt(CC);
    YY=parseInt(YY);
    var months=['jan','feb','mar','apr','may','jun','jul','aug','sep','oct','nov','dec'];
    var mon=['january','febuary','march','april','may','june','july','august','september','october','november','december'];
    var days=['saturday','sunday','monday','teusday','wednesday','thursday','friday'];
    var akanboys=['Kwame','Kwasi','Kwadwo','Kwabena','Kwaku','Yaw','Kofi'];
    var akangirls=['Ama','Akosua','Adwoa','Abenaa','Akua','Yaa','Afua'];
    

    if(months.includes(MM)||mon.includes(MM)){
        var MM=mon.indexOf(MM) + 1 ;
        var weekday=Math.floor((((CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD -3) % 7);
        weekday=Math.abs(weekday);
        if (gender=='male'){
            console.log(weekday);
            out.innerHTML="You are "+akanboys[weekday];
           alert( "your Akan name is "+akanboys[weekday] +" "+"you were born on a " + days[weekday]);
        }
        else if(gender=='female'){

           console.log(weekday);
           out.innerHTML="You are "+akangirls[weekday];
           alert( "your Akan name is "+akangirls[weekday] +" "+"you were born on a " + days[weekday]);
        }
     } 
}
//onclick button calls the above function
submit.addEventListener('click',() =>{
    output();
});



