$(document).ready(() => {
  const width = screen.width;
  // Las funciones click simulan una interacción
  // Esto previene algunos objetos del DOM de no
  // comportarse como es debido
  $(".ui.menu .item").click();
  $("#menu-mobile .item").click();
  //

  // Animación simple para que no sea tan duro el
  // de la pagina
  $("#page").hide();
  $("#page").fadeIn(1500);
  //

  // Animación del menu para la versión mobile
  $("#mobile-button").click(function() {
    $("#menu-mobile")
      .show()
      .transition("fade right");
  });
  $("#menu-mobile:visible").click(function() {
    $(this).transition("fade right");
  });
  //

  // Previene el uso de la tecla enter,
  // para enviar formulario usar boton
  $(window).keydown(function(event) {
    if (event.keyCode == 13) {
      event.preventDefault();
      return false;
    }
  });

  //preview del portfolio en mobil
  //en vez de dos cartas, muestra de a una
  if(width <= 600){
    $('.ui.three.cards').removeClass('three').addClass('one');
  }
});

/* Animación de tabulaciones entre los item del menu*/
$(".ui.menu .item").click(function() {
  $(this).tab();
});

$("#menu-mobile .item").click(function() {
  $(this).tab();
});
//

/*
API de Google Maps
*/
function initMap() {
  // The location of Uluru
  var uluru = { lat: -34.6578631, lng: -58.5017617 };
  // The map, centered at Uluru
  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 13,
    center: uluru
  });
  // The marker, positioned at Uluru
  var marker = new google.maps.Marker({ position: uluru, map: map });
}
