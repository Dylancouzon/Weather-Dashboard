var searchBtn = $('button');
var inputEl = $('.form-control');
var cityName = "London";
var searchHistory = JSON.parse(localStorage.getItem("search"));
if(!searchHistory){
  var searchHistory = [];
}else{
  var searchHistory = searchHistory.slice(0,5);
  generateHistory();
}

// Search Function
// execute getWeather function then add it to the search history
// BUG need to check if the city really exists
function searchCity() {
  var cityName = inputEl.val();
  getWeather(cityName);
  searchHistory.unshift(cityName);
  localStorage.setItem("search",JSON.stringify(searchHistory));
  generateHistory();
}

// Fetch the API
function getWeather(cityName) {
  // key 7e3a149deb7dcf451641dcd1d05f5cd5
  var url = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&units=imperial&appid=7e3a149deb7dcf451641dcd1d05f5cd5";
  fetch(url)
    .then(function (response) {
      return response.json();
    })
      .then(function (data) {
        $(".mainResult").html("");
        var name = $("<h2>");
        name.html(data.name + " (" + moment().format("l") + ")").addClass("cityName display-5 mb-4");

        var icon = $("<img>");
        icon.attr("src","https://openweathermap.org/img/wn/" + data.weather[0].icon + "@2x.png").attr("alt",data.weather[0].description).addClass("icon");;
       

        var temp = $("<p>");
        temp.html("Temperature: " + data.main.temp +"°F");

        var wind = $("<p>");
        wind.html("Wind speed: " + data.wind.speed +" MPH");

        var humidity = $("<p>");
        humidity.html("Humidity: " + data.main.humidity +"%");

        $('.mainResult').append(name, icon, temp, wind, humidity)
      });
}

//Generate the last 5 cities searched
//Make them clickable ?
function generateHistory(){
  $('ul').html("");
  for(i=0; i<searchHistory.length; i++){
    var historyEl = $("<li>");
    historyEl.addClass("list-group-item").text(searchHistory[i]);
    $('ul').append(historyEl)
  }
  
}
searchBtn.on('click', searchCity);