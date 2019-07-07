var buttons = document.querySelectorAll('.button');

var carouselOwl = ''; 

var carouselTemplate = document.getElementById('template').innerHTML;


for(var i = 0; i < tablicaSow.length; i++){
  carouselOwl += Mustache.render(carouselTemplate, tablicaSow[i]);
}

document.querySelector('.main-carousel').innerHTML = carouselOwl;




for (i = 0; i < buttons.length; i++) { 
buttons[i].addEventListener( 'click', function( event ) {
  var selector = event.target.getAttribute('data-selector');
  flkty.selectCell( selector );
});
};

var elem = document.querySelector('.main-carousel');
var flkty = new Flickity( elem, {
  // options
  cellAlign: 'left',
  contain: true,
  imagesLoaded: true,
  percentPosition: false,
  hash: true,
});

var buttonRestart = document.querySelector('.button-restart');
buttonRestart.addEventListener( 'click', function( e ) {
  flkty.select( 0 );
});


var progressBar = document.querySelector('.progress-bar');

// flkty.on( 'scroll', function( progress ) {
//   progress = Math.max( 0, Math.min( 1, progress ) );
//   progressBar.style.width = progress * 100 + '%';
// });





