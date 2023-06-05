const IngresoBienvenida = () => {
    alert("Bienvenidos a cladiaskin");
    let solicitar = prompt("Desea solicitar un turno con cladiaskin? s/n");
    if (solicitar == "s") {
        guardarDatos();
    } else {
        console.log("Salio del if");
    }
};

const guardarDatos = () => {
    const nombre = prompt("Ingrese su nombre");
    const edad = prompt("Ingrese su edad");
    tratamiento();
};

const tratamiento = () => {
    let tratamiento = prompt("Tratamientos disponibles: Dermapiling / Lifting / Pestañas / Limpieza" );
    let fecha = prompt("Ingrese dia: Fecha Solo numero");

    if ( tratamiento == "dermapiling" || tratamiento == "lifting" || tratamiento == "limpieza" ||tratamiento == "pestañas") {
        precio(tratamiento);
};
}

 const precio = (dato) => {
    const dermapiling = 500; // Dermapiling contiene su valor. Ya es un Entero
    const lifting = 200;
    const limpieza = 700;
    const pestañas = 400;
 

    if (dato == "dermapiling") {
        alert(dermapiling); 
        medioDePago(dermapiling)
        };
    if (dato == "lifting"){
       alert(lifting);    
       medioDePago(lifting)
    }
    if (dato == "limpieza"){
        alert(limpieza)
        medioDePago(limpieza);
    }
    if (dato == "pestañas"){
       alert(pestañas)
       medioDePago(pestañas);
       
    }   
   
 }
 
 const medioDePago = (dato) => {
    let pago=prompt("Usted desea abonar en efectivo o con tarjeta? e/t");
   
    if(pago=="e"){
        alert("El medio de pago que selecciono es efectivo y tiene un descuento del 15%");
        efectivo(dato);  
    }else{
        alert("El medio de pago que selecciono es con tarjeta y tiene un recargo del 15%");
        tarjeta(dato);
    }
   
 }

 const efectivo = (valor) => {
    let resultado= valor - valor*0.15
    alert("El total de la sesion es: "+ resultado)

 };

 const tarjeta = (valor) => {
    let resultado = valor + valor*0.15
    alert("El total de su sesion es:" +resultado)
 };