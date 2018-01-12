function getgeoloc()
{
    var str = "";
  if(navigator.geolocation)
    {
  navigator.geolocation.getCurrentPosition(function(position) {
    
    str = 'https://fcc-weather-api.glitch.me/api/current?'+'lat='+position.coords.latitude+'&lon='+position.coords.longitude;
    console.log(str);
    $.getJSON(str, function(json){
        $('h1').html(json.name+'<br>min:'+json["main"].temp_min + "<br> max:"+json["main"].temp_max+'<br><img class = "img-resonsive" src = "'+json.weather[0].icon+'">'+'<br>'+json.weather[0].description+'<br>');
    });
    });

  }
  return str;
  
}

function getwhether()
{
   var strin =  getgeoloc();
   console.log(strin);
}

getwhether();
 
 
