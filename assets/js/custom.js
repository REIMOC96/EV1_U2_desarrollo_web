
function comp_dat(){
    //declaramos variantres :D
    let nombre = document.querySelector("#nombre").value;
    let apellido = document.querySelector("#apellido").value;
    let telefono = document.querySelector("#telefono").valueAsNumber;
    let Carrera = document.querySelector("#Carrera").value;
    let Edad = document.querySelector("#edad").value;
    let Msj = document.querySelector("#txt_ar")

    //vamos con lo chungo D:<
    //tuve que leer muchisima documentacion pa esto, pero entendi muchisimo O.O
    //comprobamos los numeros en el nombre
    
    //el try lo agrege porque asi veo si fue todo bien o no uwu
    try{
        //vamos con el nombre primero
        //esto me tomo un Rato VV
        if(!/^([a-z; A-Z])*$/.test(nombre))
            alert("no se admiten numeros en el nombre");
        //comprobamos que no este vacio el nombre
        if(nombre.length == 0 ){
            alert("porfavor ingrese su nombre")
        }

        
        //comprobamos que no este vacio el apellido
        //comprobamos los numeros en el apellido 
        if(apellido.length == 0){
                alert("porfavor ingrese su apellido")
                }
            if(!/^([a-z;A-Z;"ñ"])*$/.test(apellido))
            alert("no se admiten numeros en el apellido");
            



     //aqui me mando de cara con el telefono xd
        if (telefono.length == 0){
                    alert ("ingrese telefono")
                }
            else if (telefono.length == 16){
                    alert ("telefono demasiado largo")
                }
            else if (telefono < 22222222 ){ 
                alert("el telefono debe ser un valor mas alto que 222222222")
            }
            else if( telefono > 999999999 ){
                alert("el telefono debe tener un valor menor que 999999999")
            }
            /*
            else{
                alert("todo bien con el telefono we")
            }
            */

        //esto me tomo tiempo VV
        //comprobar carrera :
        if(!/^([a-z; A-Z])*$/.test(Carrera))
            alert("no se admiten numeros en el nombre de la carrera");
            //comprobamos que no este vacia la carrera 
            else if(Carrera.length == 0 ){
            alert("porfavor ingrese la carrera que le interesa");
            }

        //vamos con la edad ahora
        //empezamos viendo si hay una edad ingresada
        if (Edad.length == 0){
            alert("porfavor ingrese su edad")
        }
        // aqui se me ocurrio anidar mas de un if, de esa forma, 
        //si hay un numero ingresado, recien va a verificar su valor,
        //asi evitamos que mande siempre los mensajes de alerta
        // de la edad minima y maxima VVV
        else{
            if (Edad <= 16){
                alert("La Edad minima es de 17 años");
            }
            if(Edad >= 60 ){
                alert("La edad maximas es de 60 años");
            }
        }
    } 
    // lo del try - error, me sirvio muchisimo, usar mas seguido. 
    catch(error){
        alert("algo malio sal")
    }
    
}
