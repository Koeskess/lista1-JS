function trapezio(){
    var bma=parseInt(prompt("Digite o valor da base maior: "));
    var bme=parseInt(prompt("Digite o valor da base menor: "));
    var altura=parseInt(prompt("Digite o valor da altura: "));
    var resultado = (bma+bme)*altura/2;
    alert("A área do trapezio é: " + resultado);
} 