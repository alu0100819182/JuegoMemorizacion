/*$(document).ready(function() {
  $('.slider').slick({
    autoplay: true,
    autoplaySpeed: 3000,
  });
  $('.ba-slider').beforeAfter();
  $('.accordion').accordion({
    transitionSpeed: 400,
    transitionEasing: 'ease' 
  });
});*/

/*$(document).ready(function() {
   ouibounce(document.getElementById('modal-card'), {
    aggressive: true,
    timer:5
   });
});*/

/* Alertas
function mensaje() {
  swal({
    title: 'Título',
    text: 'Mensaje de texto',
    type: 'success',
    showCloseButton: true,
    confirmButtonText: '<i class="fa fa-thumbs-up"></i> ¡Bien!',
    confirmButtonColor: '#1db75a',
    showCancelButton: true,
    cancelButtonText: '<i class="fa fa-thumbs-down"></i> :(',
    }).then(
      function() { swal('¡Aceptado!') },
      function() { swal('¡Cancelado!') }
  );
}
*/

/* Alerta 2
function mensaje() {
  humane.log('Mensaje de texto', {
    timeout: 4000,
    clickToClose: true
  });
}
*/

/* Cookies
$(document).ready(function() {
  $('.cookie-message').cookieBar({
    closeButton: '.close'
  });
});
*/

/*Autocompletado
$(document).ready(function() {
  var input = document.getElementById('datos');
    new Awesomplete(input, {
      list: ["Ada", "Java", "JavaScript", "Brainfuck", "LOLCODE", "Node.js", "Ruby on Rails"],
      minChars: 1
  });
});
*/

/*Tags
$(document).ready(function() {
  $('#input-tags').selectize({
    delimiter: ',',
    persist: false,
    create: function(input) {
      return {
        value: input,
        text: input
      }
    }
  });

  function viewTags() {
    tags = document.getElementById('inputa-tags');
    console.log(tags.value.split(','));
  }
});
*/

$('.editor').trumbowyg({
    //svgPath: '/icons/icons.svg', // path of icons.svg
    // Habitualmente, se indica la ruta del SVG en este parámetro, pero
    // en codepen, simplemente pegaremos el contenido del SVG en la parte
    // del código HTML
});

$('#trumbowyg').trumbowyg('html'); // Obtienes el HTML generado





