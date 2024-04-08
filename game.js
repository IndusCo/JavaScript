function myFunction(){
    document.getElementById('twentyone').innerHTML = ('Your hand equals' + " " + (sum + sum2));
}

function myFunction2(){
    document.getElementById('dealer').innerHTML = ('Your hand equals' + " " + (sum + sum2 + sum3));
}

function myFunction3(){
    document.getElementById('dealer2').innerHTML = ('Your hand equals' + " " + (sum + sum2 + sum3 + sum4));
}

function myFunction4(){
    document.getElementById('dealer3').innerHTML = ('Your hand equals' + " " + (sum + sum2 + sum3 + sum4 + sum5));
}

function generateRandomNumbers(){
	return Math.floor(Math.random()*11)+1;
}

function generateRandomNumbers2(){
	return Math.floor(Math.random()*11)+1;
}

function generateRandomNumbers3(){
	return Math.floor(Math.random()*11)+1;
}

function generateRandomNumbers4(){
	return Math.floor(Math.random()*11)+1;
}

function generateRandomNumbers5(){
	return Math.floor(Math.random()*11)+1;
}

let randomNumberGenerated = generateRandomNumbers();
let randomNumberGenerated2 = generateRandomNumbers2();
let randomNumberGenerated3 = generateRandomNumbers3();
let randomNumberGenerated4 = generateRandomNumbers4();
let randomNumberGenerated5 = generateRandomNumbers5();

var sum = randomNumberGenerated;
var sum2 = randomNumberGenerated2;
var sum3 = randomNumberGenerated3;
var sum4 = randomNumberGenerated4;
var sum5 = randomNumberGenerated5;

console.log("First Two Cards equal" + " " + (sum + sum2));

if((sum + sum2) == 21){
console.log("You Win!");
}
else if((sum + sum2) > 21){
console.log("Bust!");
}
else{
console.log((sum + sum2 + sum3));
}

console.log("Total Cards equal" + " " + (sum + sum2 + sum3));

if((sum + sum2 + sum3) == 21){
console.log("You Win!");
}
else if((sum + sum2 + sum3) > 21){
console.log("Bust!");
}
else{
console.log((sum + sum2 + sum3 + sum4));    
}

console.log("Total Cards equal" + " " + (sum + sum2 + sum3 + sum4));

if((sum + sum2 + sum3 + sum4) == 21){
console.log("You Win!");
}
else if((sum + sum2 + sum3 + sum4) > 21){
console.log("Bust!");
}
else{
console.log(sum + sum2 + sum3 + sum4 + sum5);
}

console.log("Total Cards equal" + " " + (sum + sum2 + sum3 + sum4 + sum5));
if((sum + sum2 + sum3 + sum4 + sum5) == 21){
console.log("You Win!");
}
else if((sum + sum2 + sum3 + sum4 + sum5) > 21){
console.log("Bust!");
}
