const VENTAS_BASES=5;

function calcularComision(numeroVentas, PrecioProducto){
    let comision = 0;
    if(numeroVentas>VENTAS_BASES){
        let ventasExtras= numeroVentas-VENTAS_BASES;
        comision=ventasExtras*(PrecioProducto*0,1);
    }
    return comision;
}

function validarVentas(){

    let numeroVentasStr = recuperarTexto("txtVentas");
    if(numeroVentasStr.length > 5){
        alert("Máximo 5 caracteres");
        return false;
    }else{
        return true;
    }

}

function calcular(){

    if(validarVentas()==false){
        return;
    }

    let sueldoBase = recuperarFloat("txtSueldoBase");
    let numeroVentas = recuperarFloat("txtVentas");
    let PrecioProducto = recuperarFloat("txtPrecio");
    
    let comision = calcularComision(numeroVentas,PrecioProducto);

    let total  = sueldoBase+comision;

    let spSueldoBase = document.getElementById("spSueldoBase");
    let spComision = document.getElementById("spComision");
    let spTotal = document.getElementById("spTotal");

    spSueldoBase.textContent = sueldoBase;
    spComision.textContent = comision;
    spTotal.textContent = total;
}

document.addEventListener("DOMContentLoaded", () => {
    const ids = ["txtSueldoBase", "txtVentas", "txtPrecio"];

    ids.forEach(id => {
        const input = document.getElementById(id);
        if (input) {
            input.onblur = function() {
                validarInput(this);
            };
        }
    });
});

function validarInput(input) {
    const valor = input.value.trim();
    const errorContainer = document.getElementById(`error-${input.id}`);
    let mensaje = "";

    // 1. Validar si está vacío
    if (valor === "") {
        mensaje = "Este campo no puede estar vacío.";
    } 
    // 2. Validar que sean solo números
    else if (!/^\d+$/.test(valor)) {
        mensaje = "Solo se permiten números.";
    } 
    // 3. Validar máximo de 5 dígitos
    else if (valor.length > 5) {
        mensaje = "El máximo son 5 dígitos.";
    }

    // Mostrar u ocultar error
    if (mensaje) {
        errorContainer.innerHTML = `<span class="error-message">${mensaje}</span>`;
        input.style.borderColor = "red";
    } else {
        errorContainer.innerHTML = "";
        input.style.borderColor = "";
    }
}