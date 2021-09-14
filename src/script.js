function fazMedia(arr) {
  /* Faz a média dos números em array */
  var sum = 0;
  for (var i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
}

function validaNota(valor) {
  /* Método para validar a entrada */
  return !isNaN(valor);
}

function leTodasAsNotas(arr) {
  /* Le 4 entradas e armazena em arrya */
  const msg = `Entre 4 notas entre 0 e 10. \nTecle  x  para sair.\n`;
  var entrada = "";
  var nota = 0.0;
  var finaliza = false;
  var contador = 0;

  while (!finaliza && contador < 4) {
    entrada = prompt(msg + `=> Nota ${contador + 1}`);
    nota = parseFloat(entrada);
    if (entrada == "x") {
      finaliza = true;
    } else {
      if (validaNota(nota)) {
        arr.push(nota);
      }
      contador++;
    }
  }
}

/* Programa principal */
var notas = [];
leTodasAsNotas(notas);
//console.log(notas);
if (notas.length != 0) {
  const media = fazMedia(notas).toFixed(1);
  alert(`a média das notas ${notas} é ${media}`);
}