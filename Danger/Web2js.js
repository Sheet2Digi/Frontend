var main = function() {
	/*var flash = "#FF0000";
	var flash2 = "#00FFFF";
	var hold = "";
	var epil = function(a) {
		document.getElementById("upload").style.backgroundColor = a; };
		/*var x = b;
		var y = a;
		setTimeout(epil(x, y), 100);
	}
	for (var x = 0; x < 111; x++){
		setTimeout(epil(flash), 100);
		hold = flash;
		flash = flash2;
		flash2 = hold;
	}*/
	function epil() {
		//var c = document.getElementById("upt");
		//c.style.backgroundColor = "#C00000";
		$('.back').addClass('red');
		$('.back').removeClass('blue');
		setTimeout(function() {apil();}, 10);
	};
	function apil() {
		//var c = document.getElementById("upt");
		//c.style.backgroundColor = "#0000C0";
		$('.back').addClass('blue');
		$('.back').removeClass('red');
		setTimeout(function() {epil();}, 10);
	};
	epil();
	function circle(dvx, dvy, vx, vy, x, y, count) {
		var up = document.getElementById("upload");
		var xx = x + vx;
		var yy = y + vy;
		var vvx = vx + dvx;
		var vvy = vy + dvy;
		var ddx = dvx;
		var ddy = dvy;
		var cc = count + 1;
		if (count % 30 === 0) {ddx = -ddx;};
		if ((count + 15) % 30 === 0) {ddy = -ddy;};
		up.style.marginLeft = x + "px";
		up.style.marginTop = y + "px";
		setTimeout(function() {circle(ddx, ddy, vvx, vvy, xx, yy, cc);}, 30);
	}
	circle(1, 1, 14, -1, 0, 0, 0);
};

$(document).ready(main);

function something() {
	alert("SOMETHING");
	/*var flash = "#FF0000";
	var flash2 = "#00FFFF";
	var epil = function(a, b) {
		document.getElementById("upload").style.backgroundColor = a;
		var x = b;
		var y = a;
		setTimeout(epil(x, y), 100);
	}
	epil(flash, flash2);*/
};