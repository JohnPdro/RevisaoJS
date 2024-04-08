// let average = 0;

function getAverage(a,b){
    let average = (a+b) / 2; // Variavél Local 
    console.log(average);
    return average;
}

let myResult = getAverage(7,11); // Variavél Global
console.log("the average is " + myResult);

function logResult(){

    console.log("the average is " + myResult + " inside the function");

}

logResult();

console.log(myResult)