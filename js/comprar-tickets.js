// Defino valor de ticket
const calorTiccket = 200;
// Defino porcentajes de descuento según la categoría
let descuentoEstudiante = 80;
let descuentoTrainee    = 50;
let descuentoJunior     = 15;
// Elementos en variables
let nombre            = document.getElementById("nombre");
let diverErrorNombre  = document.getElementById("mensajeErrorNombre");
let apellido          = document.getElementById("apellido");
let divErrorApellido  = document.getElementById("mensajeErrorApellido");
let mail              = document.getElementById("mail");
let divErrorMail      = document.getElementById("mensajeErrrMail");
let cantidadTickets   = document.getElementById("canidadTickets");
let mensajeErrorCantTickets   = document.getElementById("mensajeErrorCantTickets");
let categoria         = document.getElementById("categoriaSelect");
let mensajeErrorCategoria     = document.getElementById("mensajeErrorCaategoria");
//  Función para quitar el estilo de error  a los elementos del form
const quitarClaseError = () => {
    //function quitarClaseError() {
        let listaNodos = document.querySelectorAll(".form-control, .form-select");
        for (let i= 0; i < listaNodos.length; i++) {
            listaNodos[i].classList.remove('is-invalid');            
        }
        let listaNodosdiv = document.querySelectorAll(".invalid-feedback");
        for (let i = 0; i < listaNodosdiv.length; i++){
            listaNodosdiv[i].classList.remove('propia');
        }
}
// Cálculo total a pagar
const totalAPagar = () => {
    // function total_a_pagar() { 
        // Ejecuto función para que quite todos los estilos de error en los campos que los tuvieron
        quitarClaseError();
        // Verifico si lleno los sieguientes campos, sino que aplique un estilo de error, haga foco en el campo y se detenga
        if (nombre.value == "") {
            // alerta("por favor escribí tu nombre.");
            nombre.classList.add("is-invalid");
            diverErrorNombre.classList.add("propia");
            nombre.focus();
            return;         
        }
        if (apellido.value === "" ) {
            // alerta("por favor escribí tu apellido.");
            apellido.classList.add("is-invalid");
            divErrorApellido.classList.add("propia");
            apellido.focus();
            return;            
        }
        if (mail.value === "") {
            // alerta("por favor escribí tu email.");
            mail.classList.add("is-invalid");
            divErrorMail.classList.add("propia");
            mail.focus();
            return;            
        }
        // Para determinar si el correo electrónico es válido o no
        const emailValido = mail => {
            return /^[^\s@]+@[^\s@]+\.[\s@]+$/.test(mail); // expresiones regulares
        }
        if(!emailValido(mail.value)) {
        // alerta("por favor escribí tu correo electrónico válido.");
            mail.classList.add("is-invalid");
            divErrorMail.classList.add("propia");
            mail.focus();
            return;
        }
        // Verifico si está ingresado al menos 1 ticket, sino que aplique un estilo de error, haga foco en el campo y se detenga
        if ((cantidadTickets.value == 0) || (isNaN(cantidadTickets.value))) {
            // alerta("por favor, ingresá correctamente cantidad de tickets");
            cantidadTickets.classList.add("is-invalid");
            mensajeErrorCantTickets.classList.add("propia");
            cantidadTickets.focus();
            return;            
        }
        // Verifico que haya seleccionado una categoría, sino que aplique un estilo de error, haga foco en el campo y se detenga
        if (categoria.value == "") {
            // alerta("por favor escribí una categoría.");
            categoria.classList.add("id-invalid");
            mensajeErrorCategoria.classList.add("propia");
            categoria.focus();
            return;            
        }
        // Multiplico cantidad de tickets por el valor
        let totalValorTickets = (cantidadTickets.value) * valorTickets;
        /* realizo un switch con categoria.value - Aplicodescuentos según categoría */
        switch (categoria.value) {
            case "0":
                totalValorTickets = totalValorTickets;                
            break;
            case "1":
                totalValorTickets = totalValorTickets - (descuentoEstudiante / 100 * totalValorTickets);                ;
                break;
            case "2":
                totalValorTickets = totalValorTickets - (descuentoTrainee / 100 * totalValorTickets);                ;
                break;
            case "3":
                totalValorTickets = totalValorTickets - (descuentoJunior / 100 * totalValorTickets);                ;
                break;

        }
        // Inserto el valor en el HTML
        totalPago.innerHTML = totalValorTickets;
        /* // crear un htmlElement de tipo span
        let span = document.createElement("span");
        // crear un nodo texto para el span
        let texto = documet. createTextNode("Total a pagar: $ "+totalValorTickets);
        //asignamos al elemento span su hijo texto
        span.appendChild(texto);*/
}
// Boton Resumen recibe un escuchador y la funcion del cálculo
btnResumen.addEventListener('click' , totalAPagar);
// Función para el Borrar para que borre el valor
const resettotalAPagar = () => {
    //function reset_total_a_pagar(){
        quitarClaseError();
        totalPAgo.innerHtML = "";
}
btn.Borrar.addEventListener('click' , resetTotalAPagar);








