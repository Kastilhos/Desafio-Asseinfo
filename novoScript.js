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
    const valorSacado = parseInt($("#campo-saque").val());

    $("#saque").click(function() {
        valor = parseInt($("#campo-saque").val());
        if (Number.isInteger(valor) && valor > 0) {
            transacao(cedulas)
        } else {
            displayError();  
        };
        $("#campo-saque").val("");
    })

    function transacao(cedula, n = 0) {
        while (valor > 0){
            if (valor > cedula[n].valorCed) {
                valor -= cedula[n].valorCed;
                cedula[n].quant++
                transacao(cedula, n)
            } else if (valor < cedula[n].valorCed) {                    
                transacao(cedula, n+1)
            } else {
                valor -= cedula[n].valorCed;
                cedula[n].quant++
                transacao(cedula, n+1)
            };
        };        
        console.log("teste")
        saidaRecibo.innerHTML = mostraRecibo();
    };
    function mostraRecibo() {
        let folhaRecibo = `<h1>Total sacado: ${valorSacado}.
        <ul>`
        for (let i = 0; i < cedulas.length; i++) {
            if (cedulas[i].quant > 0) {
                folhaRecibo += ` <li>Notas de ${cedulas[i].valorCed}: ${cedulas[i].quant}</li>`;
            }
        }
        folhaRecibo += `</ul>`
        return folhaRecibo

    }
    function displayError() {
        alert("Search term cannot be empty");
    }
})