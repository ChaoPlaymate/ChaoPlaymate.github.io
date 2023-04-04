function outputShape() {
	var numSides = document.getElementById("shapeSides");
	var polyName = "";
	if (numSides.value < 0) {
		numSides.value = numSides.value * -1;
		//alert("converted number to " + numSides.value);
	}
	if (numSides.value % 1 != 0) {
		numSides.value = Math.round(numSides.value);
		//alert("converted number to " + numSides.value);
	}
	switch(Number(numSides.value)) {
		case 1:
			polyName = "henagon";
			break;
		case 2:
			polyName = "digon";
			break;
		case 3:
			polyName = "trigon";
			break;
		case 4:
			polyName = "tetragon";
			break;
		case 5:
			polyName = "pentagon";
			break;
		case 6:
			polyName = "hexagon";
			break;
		case 7:
			polyName = "heptagon";
			break;
		case 8:
			polyName = "octagon";
			break;
		case 9:
			polyName = "enneagon";
			break;
		case 10:
			polyName = "decagon";
			break;
		default:
			polyName = "unsupported/error";
		
	}
	alert(polyName);
}