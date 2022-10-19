function Metodos(){

    var ejemplo = "Soy una variable de ejemplo ...";

    var estilo = {
        color : "white",
        backgroundColor : "fuchsia"
    }

    //CREAMOS UN METODO/ ACCION
    const mostrarMensaje = () => {
        console.log("Botón pulsado...");
        ejemplo = "Nuevo VALOR!!!";
        console.log(ejemplo);
    }

    const dobleNumero = (numero) => {
        var doble = numero * 2;
        console.log(doble);
    }

    return (<div>
        
        <h1 style={estilo}>Ejemplo de métodos</h1>

        <h2 style={{color:"blue"}}>{ejemplo}</h2>

        <button onClick={ () => dobleNumero (7)}>
            Doble 7
        </button>
        <button onClick={ () => dobleNumero (17)}>
            Doble 17
        </button>
        <button onClick={ () => mostrarMensaje() }>
            Mostrar mensaje
        </button>
    </div>);

}

export default Metodos;