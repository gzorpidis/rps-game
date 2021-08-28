const choices = ['ROCK', 'PAPER', 'SCISSORS'];
var record_counter = 0;

// Randomly select between the 3 choices
const getMachineChoice = () => choices[Math.floor(Math.random() * 3)];

// Return the game's result as well as what the machine predicted

const getResults = (usersChoice, machine) => {
  	var resultCode;
  	var machineResponce = machine;
  
 	if (usersChoice === machine) {
    	resultCode =  2;	// It's a tie
 	} else if ( usersChoice === 'PAPER' && machine === 'ROCK' ) {
    	resultCode = 0;		// User won
 	} else if ( usersChoice === 'ROCK' && machine === 'SCISSORS') {
    	resultCode =  0;	// User won
 	} else if ( usersChoice === 'SCISSORS' && machine === 'PAPER') {
    	resultCode =  0;	// User won
 	} else {
    	resultCode =  1;	// User lost
	}
  
  // Return a tuple-object
  return {
  	resultCode,
    machineResponce
  };
}

// Main function for the game!
const playGame = playerChoice => {
 
 	let machine = getMachineChoice();		// Get the machine choice
 	let result = getResults(playerChoice.toUpperCase() , machine);		// Get the result object (result code & machine Responce)
 	let result_text;
  	let result_color;
 	let color_hexcode;
  
  	// Select the two elements that we will change
  	let result_box = document.getElementById('result');	
	let responce = document.getElementById('machine-sel');
	let record = document.getElementById('record');
  
  	if (result.resultCode === 2) {
  		result_text = "It's a tie!";
    	color_hexcode = "#3F84E5";
  	} else if (result.resultCode === 1) {
    	result_text = 'You lose!';
		color_hexcode = "#B20D30";
    	record_counter = 0;
	} else {
  		result_text = 'You win!';
    	color_hexcode = "#3F784C"
    	record_counter++;
  	}
  
	result_box.style.backgroundColor = color_hexcode;
 	result_box.innerHTML = result_text;
 	responce.innerHTML = `The machine predicted: ${result.machineResponce}`;	// Project what the machine's precidtion was
 	record.innerHTML = `Current record: ${record_counter}`;	// Update the record counter
}
