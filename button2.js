function buttonFunction() {
	
	let score = 0

	
	/* text boxes*/
	
	let ramTextBox = document.getElementById("ram").value;
	let ramTextBoxLower = ramTextBox.toLowerCase();

	function ramTextBoxTrueOrFalse(ramTextBoxLower) {
		if (ramTextBoxLower == "random access memory") {
			score += 1;
		}
};

	console.log(ramTextBoxTrueOrFalse(ramTextBoxLower));

	let psuTextBox = document.getElementById("psu").value;
	let psuTextBoxLower = psuTextBox.toLowerCase();

	function psuTextBoxTrueOrFalse(psuTextBoxLower) {
		if (psuTextBoxLower == "power supply unit") {
			score += 1;
		}
}; 

	console.log(psuTextBoxTrueOrFalse(psuTextBoxLower));
	
	/* checkboxes */
	
	let cpuCheckBox1 = document.querySelector("#checkbox").checked;
	
	console.log(cpuCheckBox1);
	
	let motherboardCheckBox2 = document.querySelector("#checkbox2").checked;
	
	console.log(motherboardCheckBox2);
	
	let caseCheckBox3 = document.querySelector("#checkbox3").checked;
	
	function caseCheckBox3TrueOrFalse(caseCheckBox3) {
		if (caseCheckBox3 == true) {
			score += 1;
		}
};
	console.log(caseCheckBox3TrueOrFalse(caseCheckBox3));

	/* radio buttons */
	
	let gddr6xRadio1 = document.querySelector("#gddr6x").checked;
	
	console.log(gddr6xRadio1);
	
	let ddr5Radio2 = document.querySelector("#ddr5").checked;
	
	console.log(ddr5Radio2);
	
	function ddr5Radio2TrueOrFalse(ddr5Radio2) {
		if (ddr5Radio2 == true) {
			score += 1;
		}
};

	console.log(ddr5Radio2TrueOrFalse(ddr5Radio2));

	let kpopRadio3 = document.querySelector("#kpop").checked;
	
	console.log(kpopRadio3);
	
	let ddr4Radio4 = document.querySelector("#ddr4").checked;
	
	console.log(ddr4Radio4);
	
	/* score */

	document.getElementsByTagName("h3")[0].innerHTML = "Score: " + score;
};






























































