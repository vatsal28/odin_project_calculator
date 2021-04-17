let a=0;
let b=0;
let op=0;
let final_result = 0;
function butvalue(e){
	a=e;
	scorediv.textContent = e;
}

function opvalue(e){
	b=a;
	a=0;
	op=e;
	console.log(e);
}

function clear(){
	a,b=0;
	scorediv.textContent=0;
}
const scorediv = document.querySelector("#resultdisp");
// const who_won = document.querySelector('#win_lose');
scorediv.textContent = 0;
function resultcalc(e){
	if(op=="+"){
		console.log(add(Number(a),Number(b)))
		scorediv.textContent = add(Number(a),Number(b));
	}else if(op=="-"){
		console.log(subtract(Number(a),Number(b)))
		scorediv.textContent = subtract(Number(a),Number(b))
	}else if(op=="x"){
		console.log(multiply(Number(a),Number(b)))
		scorediv.textContent = multiply(Number(a),Number(b))
	}else if(op=="/"){
		console.log(power(Number(a),Number(b)))
		scorediv.textContent = power(Number(a),Number(b))
	}
	a=0;
	b=0;
	return final_result;
	// console.log(Number(a)+Number(b));
}

function add (num1,num2) {
	return num1+num2;
}

function subtract (num1,num2) {
	return num1-num2;
}

function sum (num1,num2) {
	return num1+num2;
}

function multiply (num1,num2) {
	return num1*num2;
}

function power(num1,num2) {
	return Math.pow(num1,num2);
}

function factorial(num1) {
	let fact = 1;
	for(i=num1-1;i>0;i--){
		fact = fact * i;
	}
	return fact;
}


// scorediv.textContent = "Computer's score: " + compwins + " Your score: " + userwins;
// module.exports = {
// 	add,
// 	subtract,
// 	sum,
// 	multiply,
//     power,
// 	factorial
// }