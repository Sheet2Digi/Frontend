var main = function() {
  function res(note) {
    $("#" + note).removeClass('show');
    $("#" + note).animate({left: '0%'}, 0);
    dance(note);
  };

  function dance(note) {
    var line = Math.floor(9 * Math.random()) * 10;
    $("#" + note).animate({top: "-" + line + "px"}, 0);
    $("#" + note).addClass('show');
    $("#" + note).animate({left: '100%'}, 7000, "linear");
    setTimeout(function() {res(note);}, 7000);
  };
  dance("n0");
  setTimeout(function() {dance("n1")}, 1000);
  setTimeout(function() {dance("n2")}, 2000);
  setTimeout(function() {dance("n3")}, 3000);
  setTimeout(function() {dance("n4")}, 4000);
  setTimeout(function() {dance("n5")}, 5000);
  setTimeout(function() {dance("n6")}, 6000);
};

$(document).ready(main);

function upload() {
	alert("File: kjbbj");
};

function play(n) {
	var notefile = n + '.mp3';
	notefile.play();
};