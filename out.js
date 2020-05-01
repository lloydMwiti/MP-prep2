var gender = prompt("are you male or female");
var day =prompt("what day were you born (ie. monday, teusday),if y0u dont know type 0");

if(day == '0' ||''||'i dont know'){
    var DD =parseInt(prompt('what day were you born (ie. 1 , 21) '));
    var MM =prompt('what month were you born (ie. january/ jan /1)');
    
    var Yr =prompt('what year were you born (ie.1998)');
    var CC =Yr.substring(0,1);
    var YY=Yr.substring(3,4)
    var cc=parseInt(CC);
    var YY=parseInt(YY);
    let months=['jan','feb','march','apr','may','jun','jul','aug','sep','oct','nov','dec'];
    const weekday=(((CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD);

    // for(i=1;i<12;i>0){
    //     var MM=months[i];
    // }

    if (MM='jan'||'january'||'1'){
        var MM =  1;
    }
    else if (MM='feb'||'febuary'||'2'){
        var MM =  2;
    }
    else if (MM='mar'||'march'||'3'){
        var MM =  3;
    }
    else if (MM='apr'||'april'||'4'){
        var MM =  4;
    }
    else if (MM='may'||'may'||'5'){
        var MM =  5;
    }
    else if (MM='jun'||'june'||'6'){
        var MM =  6;
    }
    else if (MM='jul'||'july'||'7'){
        var MM =  7;
    }
    else if (MM='aug'||'august'||'8'){
        var MM =  8;
    }
    else if (MM='sep'||'september'||'9'){
        var MM =  9;
    }
    else if (MM='oct'||'october'||'10'){
        var MM =  10;
    }
    else if (MM='nov'||'november'||'11'){
        var MM =  11;
    }
    else if (MM='dec'||'december'||'12'){
        var MM =  12;
    }
    

    if (gender= 'male'){
        if (weekday==0){
            console.log("Kwasi");
        }
        else if (weekday==1){
            console.log("Kwadwo");
        }
        else if (weekday==2){
            console.log("Kwabena");
        }
        else if (weekday==3){
            console.log("Kwaku");
        }
        else if (weekday==4){
            console.log("Yaw");
        }
        else if (weekday==5){
            console.log("Kofi");
        }
        else if (weekday==6){
            console.log("Kwame");
        }
    }
    if(gender=female){
        if (weekday==0){
            console.log("Akosua");
        }
        else if (weekday==1){
            console.log("Adwoa");
        }
        else if (weekday==2){
            console.log("Abenaa");
        }
        else if (weekday==3){
            console.log("Akua");
        }
        else if (weekday==4){
            console.log("Yaa");
        }
        else if (weekday==5){
            console.log("Afua");
        }
        else if (weekday==6){
            console.log("Ama");
        }
    }
    
}
else{
    alert("didnt catch that"); 
}