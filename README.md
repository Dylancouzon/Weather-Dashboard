# Weather Dashboard
Project for UC Berkeley coding Bootcamp

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

![Site](./assets/dashboard.gif)

## Technology
<img align="left" alt="HTML" width="25x" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/html/html.png"/> &nbsp;
<img align="left" alt="JavaScript" width="25x" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/css/css.png"/> &nbsp;
<img align="left" alt="Bootstrap" width="25x" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/bootstrap/bootstrap.png"/> &nbsp;
<img align="left" alt="JavaScript" width="25x" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/javascript/javascript.png"/> &nbsp;
<img align="left" alt="JavaScript" width="25x" src="https://cdn.iconscout.com/icon/free/png-512/jquery-10-1175155.png"/> &nbsp;


- HTML
- CSS
- JavaScript
- Local Storage
- [Bootstrap](https://getbootstrap.com/)
- [jQuery](https://jquery.com/)
- [Moment.js](https://momentjs.com/)
- [openweathermap API](https://openweathermap.org/api)

<br>
<hr>

## Summary 
This App allows you to get Weather infos about the city of your choice.
It gives you real time data as well as a 5 days forecast.
The last 5 cities you were looking for are added to the search history.

<br>
<hr>

## Code 
```js
function searchCity() {
  var cityName = inputEl.val();
  getWeather(cityName);
  searchHistory.unshift(cityName);
  searchHistory = searchHistory.slice(0,5);
  localStorage.setItem("search",JSON.stringify(searchHistory));
  generateHistory();
}
```
This function that I created allowed me to store only the 5 most recent searches which prevents using too much space in Local Storage and make the data more readable.

<br>
<hr>

## Deployed Link

[See Live Site](https://dylancouzon.github.io/Weather-Dashboard/)

<br>
<hr>

## Author
- [dylancouzon@gmail.com](mailto:dylancouzon@gmail.com)
- [GitHub](https://github.com/Dylancouzon)
- [LinkedIn](https://www.linkedin.com/in/dcouzon/)
