var button = document.querySelector('button');
var red = document.querySelector('#red');
var green = document.querySelector('#green');
var blue = document.querySelector('#blue');
var main = document.querySelector('#main');
button.addEventListener('click', function() {
    var nred = red.value;
    var ngreen = green.value;
    var nblue = blue.value;
    var colorformatter = 'rgb(' + nred + ',' + ngreen + ',' + nblue + ')';
    main.style.backgroundColor = colorformatter;
})