$(document).ready(function() {
  $('#card').flip({
    axis: 'y', // 'x' para giro en eje X
    trigger: 'click', // 'hover': giro sobre tarjeta
    speed: 500, // Velocidad del giro
  });
  $('#carddos').flip({
    axis: 'y', // 'x' para giro en eje X
    trigger: 'click', // 'hover': giro sobre tarjeta
    speed: 500, // Velocidad del giro
  });
});

var giro;
var numeroGiro = 1;

function carta1() {
  this.tipo = this.id;
  if(numeroGiro == 2) {
    console.log("hola");
  }
  else {
    giro = this.tipo;
    numeroGiro++;
  }
}
