const VENTAS_BASES=5;

function calcularComision(numeroVentas, PrecioProducto){
    let comision = 0;
    if(numeroVentas>VENTAS_BASES){
        let ventasExtras= numeroVentas-VENTAS_BASES;
        comision=ventasExtras*(PrecioProducto*0,1);
    }
    return comision;
}

function calcular(){

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