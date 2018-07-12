function dragstartnow(e){
    console.log(" on drag event is called")
    e.dataTransfer.setData("sourceId",e.target.id)
}
function dragovernow(e)
{
    e.preventDefault()
    console.log(" i am dragging on div2")
}
function dropnow(e){
    e.preventDefault()
    console.log("i am being dropped on div2")
    var temp=e.dataTransfer.getData("sourceId")
    console.log(temp)
    var tempIng=document.getElementById(temp)
    e.target.appendChild(tempIng)
    
}