

async function fetching(city) { 
    
    let weather = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=7d77b96c972b4d119a3151101212704&q=${city}&days=3`)
    let data = await weather.json()
    displaying(data)
    displayForecast(data)
}
fetching("cairo")

function displaying (data) {
    


    document.getElementById("area").innerText = data.location.name
    document.getElementById("degree").innerHTML = data.current.temp_c + '<span class="o">o</span>C'
    document.getElementById("degree-icon").setAttribute("src", `https:${data.forecast.forecastday[0].day.condition.icon}`)
    document.getElementById("status1").innerText = data.forecast.forecastday[0].day.condition.text

    document.getElementById("degree2").innerHTML = data.forecast.forecastday[1].day.maxtemp_c + '<span class="o">o</span>C'
    document.getElementById("degree3").innerHTML = data.forecast.forecastday[1].day.mintemp_c + '<span class="os">o</span>C'
    document.getElementById("degree-icon2").setAttribute("src", `https:${data.forecast.forecastday[1].day.condition.icon}`)
    document.getElementById("status2").innerText = data.forecast.forecastday[1].day.condition.text
    
    document.getElementById("degree4").innerHTML = data.forecast.forecastday[2].day.maxtemp_c + '<span class="o">o</span>C'
    document.getElementById("degree5").innerHTML = data.forecast.forecastday[2].day.mintemp_c + '<span class="os">o</span>C'
    document.getElementById("degree-icon3").setAttribute("src", `https:${data.forecast.forecastday[2].day.condition.icon}`)
    document.getElementById("status3").innerText = data.forecast.forecastday[2].day.condition.text

}
function displayForecast(data) {
    let days = ['Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    let monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"];

    function getDayName(date) {
        return days[(new Date(date)).getDay() + 1];
    }

    function getFormattedDate(date) {
        let day = (new Date(date)).getDate();
        let month = monthNames[(new Date(date)).getMonth()];
        return day + ' ' + month;
    }

    let d1 = data.forecast.forecastday[0].date;
    document.getElementById('day1').innerHTML = getDayName(d1);

    let d2 = data.forecast.forecastday[1].date;
    document.getElementById('day2').innerHTML = getDayName(d2);

    let d3 = data.forecast.forecastday[2].date;
    document.getElementById('day3').innerHTML = getDayName(d3);

    document.getElementById('month').innerHTML = getFormattedDate(d1);
}



$("#search").on("input", function () {
    fetching($("#search").val());
});
