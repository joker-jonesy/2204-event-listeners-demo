const parentEle = document.getElementById('parent');

parentEle.addEventListener('click', function(event){
    this.click="clicked"
    console.log(event);
    if(event.target !== event.currentTarget){
        event.target.style.backgroundColor="red";
        console.log(this.license);
    }else{
        event.target.style.backgroundColor="blue";
    }

})

const carLot = [];

function Car(nm){
    this.license="stuff";
    this.name=nm;
    this.drive = function(){
        console.log(this.name+" gotta go fast")
    }
}

carLot.push(new Car('Civic'));
carLot.push(new Car('C-RV'));

console.log(carLot[0].name)
carLot[1].drive()



