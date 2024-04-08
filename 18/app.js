console.log(this);


let myCar2 = { // Criação de um objeto
    maxSpeed: 50,
    driver: "Net Ninja",
    drive: function(speed, time){
        console.log(speed * time);
    },
    logDriver: function(){
        console.log("driver name is " + this.driver);
    }
};




console.log(myCar2.logDriver());
console.log(myCar2.maxSpeed);
console.log(myCar2.drive(50, 3));