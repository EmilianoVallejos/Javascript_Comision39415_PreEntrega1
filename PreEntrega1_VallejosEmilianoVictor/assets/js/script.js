// FUNCIÓN: realiza DESCUENTO SI SOS SOCIO

function precio_a_pagar(monto, socio) {
    if (socio == "Si" || socio == "si") {
      let precio_si = monto * 0.7;
    return precio_si;
    } else if (socio == "No" || socio == "no") {
    let precio_no = monto;
    return precio_no;
    }
}
//INPUT
let socio = prompt(
"Ingresar si es Socio: Si/No. Socios tienen beneficio de 30% de descuento."
)

// VERIFICADOR DE SOCIO
while (socio != "Si" && socio != "si" && socio != "No" && socio != "no") {
    alert(socio);
}

compra = prompt(
"Escriba lo que quiera comprar: Balanceado $2.000, Cucha $8000 o Medicamento $3.000. Al finalizar escriba Fin."
);
let cantidad_balanceado = 0;
let cantidad_cucha = 0;
let cantidad_medicamento = 0;
let precio_total_balanceado = precio_a_pagar(2000, socio);
let precio_total_cucha = precio_a_pagar(8000, socio);
let precio_total_medicamento = precio_a_pagar(3000, socio);

// BUCLE para COMPRAS
while (compra != "Fin" && compra != "fin") {
    if (compra == "Balanceado" || compra == "balanceado") {
    cantidad_balanceado++;
    } 
    else if (compra == "Cucha" || compra == "cucha") {
    cantidad_cucha++;
    }
    else if (compra == "Medicamento" || compra == "medicamento") {
    cantidad_medicamento++;
    }
    else {
    alert("Ingrese valor");
    }
compra = prompt(
    "Desea agregar: Balanceado $2.000, Cucha $8.000 o Medicamento $3.000. Al finalizar la compra escriba Fin"
);
}

// CÁLCULO COMPRAS

if (cantidad_balanceado > 0) {
    console.log("Compraste ",
    cantidad_balanceado,
    " balanceado y gastaste $",
    cantidad_balanceado * precio_total_balanceado
    );
}
if (cantidad_cucha > 0) {
    console.log(
    "Compraste ",
    cantidad_cucha,
    " cucha/s y gastaste $",
    cantidad_cucha * precio_total_cucha
);
}
if (cantidad_medicamento > 0) {
    console.log(
    "Compraste ",
    cantidad_medicamento,
    " medicamento/s y gastaste $",
    cantidad_medicamento * precio_total_medicamento
    );
}
let cantidad_total =
    cantidad_balanceado * precio_total_balanceado +
    cantidad_cucha * precio_total_cucha +
    cantidad_medicamento * precio_total_medicamento;

if (cantidad_total != NaN) {
console.log("Gastaste en total $", cantidad_total);
}