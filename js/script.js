var buttons = document.querySelectorAll('.button');

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
  wrapAround: true
});

// element argument can be a selector string
//   for an individual element
var flkty = new Flickity( '.main-carousel', {
  // options
});
var flkty = new Flickity('.main-carousel');

var progressBar = document.querySelector('.progress-bar')

flkty.on( 'scroll', function( progress ) {
  progress = Math.max( 0, Math.min( 1, progress ) );
  progressBar.style.width = progress * 100 + '%';
});