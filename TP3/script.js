function validardesc(desc){
    const liamdown = ["cama","mesa","ropero","silla"];
    if (liamdown.includes(desc)){
        return desc;
    }
    return 0;
}

function validarcant(cant){
    if (cant>=0 && cant<=100){
      return cant;
    }
    return 0;
}

function envios(dom,prec){
    if (dom==true){
        return prec+=2000;
    }
    return prec;
}


function descprecio(desc){
    const arrayy = {
        "cama":50000,
        "silla":80000,
        "mesa":20000,
        "ropero":100000
    }
    var xd = arrayy[desc];
    console.log(xd);
    return xd;
}

function alga(tip,cant,prec){
    if (tip=="algarrobo" && cant>50){
        prec=prec*0.9;
    }
    return prec;
}

function calcular(){
	
	var desc=document.getElementById("descri").value;

	var tip=document.getElementById("tipe").value;

	var dom=document.getElementById("envio").checked;

    var cant=document.getElementById("canti").value;

    var can=parseInt(cant);

    var prec=0;

    if(validardesc(desc)==0 || validarcant(can)==0){
 
		alert("cantidad invalida o el mueble invalido");

	}

	else{


    validardesc(desc);
    validarcant(can);
    prec=descprecio(desc);
    console.log("1: "+prec);
    prec=alga(tip,can,prec)*can;
    console.log("2: "+prec)
    prec=envios(dom,prec);
    console.log("3: "+prec)
    alert("precio: "+ prec);

    }
}   
