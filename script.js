var tipo;
var giro;
var numeroGiro = 1;

$(document).ready(function() {
  $('#card').flip({
    axis: 'y', // 'x' para giro en eje X
    trigger: 'click', // 'hover': giro sobre tarjeta
    speed: 500, // Velocidad del giro
    var propio = 'manzanza';
    if(numeroGiro == 2) && (tipo == propio) {
      console.log("Bien");
    }
    else {
      numeroGiro++;
    }
  });
  $('#carddos').flip({
    axis: 'y', // 'x' para giro en eje X
    trigger: 'click', // 'hover': giro sobre tarjeta
    speed: 500, // Velocidad del giro
     var propio = "manzanza";
    if(numeroGiro == 2) && (tipo == propio) {
      console.log("Bien");
    }
    else {
      numeroGiro++;
    }
  });
});
