var bg;
var Url = "treasure-game/assets/sounds/";
var treasuresfx = "treasure.wav";
var bg = "bg.mp3";
var sound = "sfx.mp3";
var badsfx = "sfxbad.wav";
var bg = "bg.mp3";
var keysfx = "key.wav";

$(document).one("click" ,function() {
    new Audio(Url + bg).play();
});

$('button.correct').click(function() {
    new Audio(Url + sound).play();
    $('body').prepend('<div class="alert fade show alert-success" role="alert">Μπράβο! Το βρήκες!</div>')
    setTimeout(function() {
        $(".alert-success").alert('close')
    }, 2500);
});

$('button.incorrect').click(function() {
    new Audio(Url + badsfx).play();
    $('body').prepend('<div class="alert fade show alert-warning" role="alert">Σκέψου το καλύτερα και ξαναπροσπάθησε...</div>')
    setTimeout(function() {
        $(".alert-warning").alert('close')
    }, 2500);
});

$('button.correctkey').click(function() {
    new Audio(Url + keysfx).play();
    $('body').prepend('<div class="alert keyalert fade show " role="alert">Συγχαρητήρια! Πήρες το κλειδί! <br> <img src="styles/key.svg" id="kleidi" class="icon" /> </div>')
    setTimeout(function() {
        $(".keyalert").alert('close')
    }, 5000);
});
