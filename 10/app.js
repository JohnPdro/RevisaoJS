function getAverage(a,b,c,d,e,f){ // a e b são parametro que serão substituidos por números 
    let average = (a + b + c + d + e + f) / 6;
    console.log(average);
    return average;
}
let myResult = getAverage(7,8,9,10,11,12); // 7 e 12 são os numeros que substituiram os parametros a e b para realização do calculo
console.log("the average is " + myResult);


