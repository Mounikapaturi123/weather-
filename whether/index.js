var input=document.querySelector('#cityinput')
var btn=document.querySelector('#add')
var city=document.querySelector('#cityoutput')
var descrip=document.querySelector('#description')
var temp=document.querySelector('#temp')
var wind=document.querySelector('#wind')
apik="b40e4f6758d78ed55310fb68bc8f7877"

function convertion(val)
{
    return ( val - 273).toFixed(3)
}

btn.addEventListener('click',function()
{
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+input.value +'&appid='+apik)
    .then(res =>res.json())
    .then(data=>
    {
        var nameval=data['name']
        var descrip=data['weather']['0']['description']
        var tempature=data['main']['temp']
        var wndspeed=data['wind']['speed']


        city.innerHTML=`weather of <span>${nameval}<span>`
        temp.innerHTML=`Temperature:<span>${ convertion(tempature)}c<span>`
        description.innerHTML=`sky conditions: <span>${descrip}<span>`
        wind.innerHTML=`wind speed:<span>${wndspeed}km/h<span>`
    })
    .catch(err=> {
        alert("you have entered wrong city name")})
})
