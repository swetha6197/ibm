var CurrentLocationDiv=document.getElementById("currentlocation")


getCurrentLocation = function()
{
    navigator.geolocation.getCurrentPosition(successInFinding)
}
function successInFinding(location)
{
    var lat=location.coords.latitude
    var lon=location.coords.longitude
    CurrentLocationDiv.innerHTML=lat +","+lon
}