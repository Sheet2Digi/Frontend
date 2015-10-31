//This does nothing right now, I'm trying to get an image to
//shoot across the screen periodically.

var main = function() {
  var a = document.createElement("img");
  a.src = "http://cliparts.co/cliparts/8T6/oLr/8T6oLrK8c.png";
  a.height = 100;
  a.width = 100;
}

$(document).ready(main);

function upload() {
	var file = document.getElementById("FileUpload").value;
	alert("File: " + file);
}