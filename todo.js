var inputvalue = document.getElementById("taskvalueid")
var counter=1

addTask=function(){
   if(localStorage.getItem("taskcounter")===null){
       localStorage.setItem("taskcounter",counter)
   }
   else{
       counter=localStorage.getItem("taskcounter")
   }
   
   var currenttask=inputvalue.value
   console.log("saving the task to localstorage")
    localStorage.setItem("task_" +counter,currenttask)
    inputvalue.value=""
    localStorage.setItem("taskcounter",++counter)
    loadTask()
}
function loadTask(){
console.log("loading tasks in the view")
var container=document.getElementById("taskcontainer")
container.innerHTML=""

var newul =document.createElement("ol")
document.getElementById("taskcontainer").appendChild(newul)

var maxCounter=localStorage.getItem("taskcounter")
for(var i=1;i<maxCounter;i++){
    var newli=document.createElement("li")
    var currenttask=localStorage.getItem("task_"+i)
    newli.innerHTML=currenttask
    newul.appendChild(newli)
}

}
loadTask()