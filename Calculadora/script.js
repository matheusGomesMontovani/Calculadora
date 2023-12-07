$(document).ready(function() {
    var numInicial = true

    $(".botao-numero").click(function() {
        var numero = $("#resultado").text();
        var botaoNumClick = $(this).text();
        $("#resultado").text(numero + botaoNumClick);

        if (numInicial || numero == "0") {
            $("#resultado").text(botaoNumClick);
            numInicial= false;
        } else {
            $("#resultado").text(numero + botaoNumClick);
        }
    });

    $(".botao-operador").click(function() {
        var resultado = $("#resultado").text();
        var botaoOperadorClick = $(this).text();
        if (resultado) {
            $("#resultado").text(resultado + " " + botaoOperadorClick + " ");
        }
    });

    $("#botao-limpar").click(function() {
       $("#resultado").text("0"); 
    });

    $("#botao-resultado").click(function() {
       var resultado = $("#resultado").text();
       if (resultado) { 
            resultado = resultado.replace(/x/g, "*").replace(/÷/g, "/");
            $("#resultado").text(eval(resultado));
       } else {
            $("#resultado").text("Nada...");
       } 
    });
});


//<script type="text/javascript" src="https://code.jquery.com/jquery-3.7.0.min.js"></script>
//÷
/*function insert(num)
{
    var numero = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = numero + num;
}
function clean()
{
    document.getElementById('resultado').innerHTML = "";
}
function calcular()
{
    var resultado = document.getElementById('resultado').innerHTML;
    if(resultado)
    {
        document.getElementById('resultado').innerHTML = eval(resultado);
    }
    else
    {
        document.getElementById('resultado').innerHTML = "Nada..."
    }
}*/

