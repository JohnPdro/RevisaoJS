let Car = function(maxSpeed, driver){
    this.maxSpeed = maxSpeed;
    this.driver = driver;
    this.drive = function(speed, time){
        console.log(speed * time);
    };
    this.logDriver = function(){
        console.log("driver name is " + this.driver);
    };
    console.log(this)
}


let myCar = new Car(70, "Ninja Man");
let myCar2 = new Car(30, "Ninja");
let myCar3 = new Car(50, "Shaun");
let myCar4 = new Car(90, "John");

myCar.drive(30, 5);
myCar3.logDriver();