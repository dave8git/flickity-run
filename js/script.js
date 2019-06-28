var buttons = document.querySelectorAll('.button');
var carouselOwl = ''; 

var carouselTemplate = document.getElementById('template').innerHTML;


for(var i = 0; i < tablicaSow.length; i++){
  console.log(tablicaSow[i]);
  carouselOwl += Mustache.render(carouselTemplate, tablicaSow[i]);
}

document.querySelector('.main-carousel').innerHTML = carouselOwl;

console.log(carouselOwl); 

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

var progressBar = document.querySelector('.progress-bar')

flkty.on( 'scroll', function( progress ) {
  progress = Math.max( 0, Math.min( 1, progress ) );
  progressBar.style.width = progress * 100 + '%';
});

