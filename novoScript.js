$(document).ready(function() {
    let saidaRecibo = document.getElementById("recibo");
    const cedulas = [
        {
            valorCed: 100,
            quant: 0
        },
        {
            valorCed: 50,
            quant: 0
        },
        {
            valorCed: 10,
            quant: 0
        },
        {
            valorCed: 5,
            quant: 0
        },
        {
            valorCed: 1,
            quant: 0
        },
    ];
    var valor;    
    const valorSacado = valor;

    $("#saque").click(function() {
        valor = $("#campo-saque").val();
        if (!Number.isInteger(valor) || valor < 0) {
            displayError();  
        } else {
            let transacao = function calc(cedula, n = 0) {
                while (valor > 0){
                    if (valor > cedula[n].valorCed) {
                        valor -= cedula[n].valorCed;
                        cedula[n].quant++
                        calc(cedula, n)
                    } else if (valor < cedula[n].valorCed) {                    
                        calc(cedula, n+1)
                    } else {
                        valor -= cedula[n].valorCed;
                        cedula[n].quant++
                        calc(cedula, n+1)
                    };
                };
                return cedula;
            };
            console.log(valorSacado)
            return transacao(cedulas)
        };
        $("#campo-saque").val("");
    })
    function mostraRecibo() {

    }
    console.log(saque(1393))
})