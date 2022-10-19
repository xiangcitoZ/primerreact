function Saludo(porps){

    var dato = "Mañana será miércoles..";
    // var nombre = porps.nombre;
    // var edad = porps.edad;

    const {nombre , edad } = porps;
    //SOLO PUEDE TENER UNA ETIQUETA, MEJOR PONER UN DIV SI QUIERES VARIAS ETIQUETAS
    return (<div><h1>Mi primer martes React, {nombre}, con edad {edad}</h1>
        <h2>{dato}</h2>
        </div>);

}

export default Saludo;