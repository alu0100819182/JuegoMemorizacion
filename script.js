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

/* Editor
$(document).ready(function() {
  $('.editor').trumbowyg({
    svgPath: '/Librerias-en-HTML/images/icons.svg', // path of icons.svg
    // Habitualmente, se indica la ruta del SVG en este parámetro, pero
    // en codepen, simplemente pegaremos el contenido del SVG en la parte
    // del código HTML
  });
  $('.editor').trumbowyg('html'); // Obtienes el HTML generado
  $('.editor').trumbowyg({
    lang: 'es', // Idioma (es.min.js incluido)
    btns: [
          ['italic', 'underline', 'strikethrough', 'bold'],
          ['superscript', 'subscript'],
          ['justifyLeft', 'justifyCenter', 'justifyRight', 'justifyFull'],
          ['unorderedList', 'orderedList'],
          ['link', 'insertImage'],
          ['horizontalRule', 'removeformat'],
          ['viewHTML'],
          ['fullscreen']
        ],
  });
});
*/

/*Waypoint
$(document).ready(function() {
  var waypoint = new Waypoint({
    element: document.getElementById('tres'),
    handler: function(direction) {
      alert('¡Has llegado!');
    }
  });
  var waypoint = new Waypoint({
    element: document.getElementById('tres'),
    handler: function(direction) {
      console.log('¡Has pasado por aquí!');
      if (direction == 'down') {
        console.log('¡Hacia abajo!');
        this.destroy(); 			        // Sólo lo detectará una vez
      }
    }
  });
});
*/

/*Graficas
$(document).ready(function() {
 var data = {
  // labels: ['A1', 'A2', 'A3', 'A4', 'A5', 'A6'],
     //series: [{ data: [2, 4, 6, 8, 10, 12] }, // ct-series-a
     //    { data: [1, 2, 3, 4, 5, 6] },   // ct-series-b
     //      { data: [12, 10, 8, 6, 4, 2] }  // ct-series-c
     //     ]
   series: [20 ,10, 30, 40]
  };

  var options = {
    donut: true,
    donutWidth: 40,
    startAngle: 270,
    total: 200
  };

  new Chartist.Pie('.chart', data, options);
});
*/

/*Diagramas
$(document).ready(function() {
	var sample = 'Title: Esto es un título \n B-->C: Línea a rayas';
	var diagram = Diagram.parse(sample);
	diagram.drawSVG('diagram', {
		theme: 'hand'	// o 'simple'
	});
});
*/

/*Grafos
$(document).ready(function() {
	var sample = 'digraph g { a -> b -> c -> a,d d -> a; }';
	var options = {
	  format: 'svg',
	  engine: 'circo'
	}
	var image = Viz(sample, options);
	var main = document.getElementById('main');
	main.innerHTML = image;		// SVG
	main.appendChild(image);	// PNG
});
*/

/*Tablas
$(document).ready(function() {
	var tabla = document.getElementById('tablesort');
	new Tablesort(tabla);
});
*/

/* Tarjeta presentacion 3d
$(document).ready(function() {
	$('#card').flip({
  		axis: 'y',				
  		trigger: 'click',		
  		speed: 500,				
	});
});
*/

$(document).ready(function() {
   function downloadPDF() {	
	var imgData = 'data:image/jpeg;base64,[...]';
	var doc = new jsPDF();
	doc.setFontSize(40);			
	doc.text(75, 25, 'Nyan Cat');	
	doc.addImage(imgData, 'JPEG', 15, 40, 180, 160);	
	doc.setFontSize(14);			
	doc.text(85, 215, 'Generado con jsPDF');
	doc.save('sample.pdf');
   }
});


