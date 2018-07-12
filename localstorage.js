var numberCounter=1

saveData = function(){
    var displayCounter =document.getElementById("Counter")
    localStorage.setItem("counter",numberCounter)
var currentvalue=localStorage.getItem("counter")
displayCounter.innerhtml=currentvalue
numberCounter++

}