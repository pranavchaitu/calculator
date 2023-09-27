let calculation = localStorage.getItem('calculation') || "";

displayCalculation();

function clearButton(){
	calculation='';
	displayCalculation();
	localStorage.removeItem('calculation');	
}

function displayCalculation(){
	document.querySelector('.js-calculation').innerHTML = calculation;
	localStorage.setItem('calculation',calculation);
}

function updateCalculation(value){
	calculation += value;
	displayCalculation();
}