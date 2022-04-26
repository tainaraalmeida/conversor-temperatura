
function temperaturaCelsiusParaFahrenheit(){
 
    var temperatura= parseFloat(document.getElementById('t').value);
      var celsiusParaFahrenheit = (temperatura*1.8) + 32;
   
    document.getElementById('tempFah').innerHTML = celsiusParaFahrenheit + " Graus ºF";
  
  }
  
  function temperaturaFahrenheitParaCelsius(){
 
  var temperatura= parseFloat(document.getElementById('t1').value);
   
    var FahrenheitParaCelsius = (temperatura - 32) / 1.8;
  
  document.getElementById('tempCel').innerHTML = FahrenheitParaCelsius.toFixed(2) + " Graus ºC";
}


 
 
  
