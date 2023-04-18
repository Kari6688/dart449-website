// declare the variables
const open = document.querySelector('#openMenu');
const close = document.querySelector('#closeMenu');
const nav = document.querySelector('#myNav');

const pDay = document.querySelector('#day');
const pNight = document.querySelector('#night');

//new way to write
 open.onclick = function() {
   nav.style.height = '100vh';
 };

//open.addEventListener('click', function(){
//  nav.style.height = '30vh';
//});

// close.onclick = function(){
//   nav.style.height = '0';
// };
close.addEventListener('click', function(){
  nav.style.height = '0';
});


// pDay.onclick = function(){
  // this.classList.add('change');
//   this.classList.toggle('change');
// };

pDay.addEventListener('click', function(){
  // this.classList.add('change');
    this.classList.toggle('change');
});