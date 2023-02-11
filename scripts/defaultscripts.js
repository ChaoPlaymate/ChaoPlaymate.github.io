function scriptTest() {
	alert("hey my script is running");
}
function displayWelcome() {
	var formElements1 = document.getElementById("form1");
	let welcomeMessage = "Hemric Designs welcomes you, " + formElements1.elements[0].value + "!<br>We're glad you are doing " + formElements1.elements[1].value + "!";
	document.getElementById("welcome").innerHTML = welcomeMessage;
}
function startSwim() {
					var swimResult = document.getElementById("swimForm");
					var text = "";
					for (i = 0; i < swimResult.elements[0].value;i++) {
						text += "swim <br>";
					}
					document.getElementById("swimLines").innerHTML = text;
				}
function combineFish() {
					var fish1 = document.getElementById("fishName1");
					var fish2 = document.getElementById("fishName2");
					var text = "Your new fish is called the ";
					if (fish1.value == "carp") {
						text += "Ca";
					} else if (fish1.value == "koi") {
						text += "Ko";
					} else if (fish1.value == "bass") {
						text += "Ba";
					} else if (fish1.value == "herring") {
						text += "Her";
					}
					if (fish2.value == "carp") {
						text += "rp";
					} else if (fish2.value == "koi") {
						text += "i";
					} else if (fish2.value == "bass") {
						text += "ss";
					} else if (fish2.value == "herring") {
						text += "ring";
					}
					text += "!";
					document.getElementById("newFishNameText").innerHTML = text;
				}
function fourHourSwim() {
	let currentDate = new Date();
	timeHours = currentDate.getHours();
	timeMinutes = currentDate.getMinutes();
	timeText = "";
	timeHours += 4;
	if (timeHours > 24) {
		timeHours -= 24;
	}
	if (timeHours < 10) {
		timeText +="0";
	}
	timeText += timeHours + ":";
	if (timeMinutes < 10) {
		timeText +="0";
	}
	timeText += timeMinutes;
	document.getElementById("fourHourLaterTime").innerHTML = timeText;
}
function flipFishCoin() {
	let coinValue = Math.floor(Math.random() * 2);
	if (coinValue == 0) {
		document.getElementById("fishCoin").src = "images/fishcoinheads.png";
		document.getElementById("fishCoinResult").innerHTML = "Heads!";
	} else if (coinValue == 1) {
		document.getElementById("fishCoin").src = "images/fishcointails.png";
		document.getElementById("fishCoinResult").innerHTML = "Tails!";
	}
}
function fishColorCalculate() {
	var yellowFishCountCalculate = document.getElementById("yellowFishCount").value;
	var redFishCountCalculate = document.getElementById("redFishCount").value;
	var fishDenominator = Number(redFishCountCalculate) + Number(yellowFishCountCalculate);
	console.log(Number(redFishCountCalculate) + Number(yellowFishCountCalculate));
	var fishDivision = Number(redFishCountCalculate) / Number(fishDenominator);
	console.log(Number(redFishCountCalculate) / Number(fishDenominator));
	var fishProbability = Number(fishDivision) * 100;
	let fishText = "The chance of picking out a red fish is " + fishProbability + "%.";
	document.getElementById("fishChanceText").innerHTML = fishText;
}