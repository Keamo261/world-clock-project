function updateTime() {
  //Casablanca
  let casablancaElement = document.querySelector("#casablanca");
  if (casablancaElement) {
    let casablancaDate = casablancaElement.querySelector(".date");
    let casablancaTimeElement = casablancaElement.querySelector(".time");
    let casablancaTime = moment().tz("Africa/Casablanca");

    casablancaDate.innerHTML = casablancaTime.format("MMMM Do, YYYY");
    casablancaTimeElement.innerHTML = casablancaTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }

  //Barbados
  let barbadosElement = document.querySelector("#barbados");
  if (barbadosElement) {
    let barbadosDate = barbadosElement.querySelector(".date");
    let barbadosTimeElement = barbadosElement.querySelector(".time");
    let barbadosTime = moment().tz("America/Barbados");

    barbadosDate.innerHTML = barbadosTime.format("MMMM Do, YYYY");
    barbadosTimeElement.innerHTML = barbadosTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }
}
function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `
        <div class="city">
          <div>
            <h2>${cityName}</h2>
            <div class="date">${cityTime.format("MMMM Do, YYYY")}</div>
          </div>
          <div class="time">${cityTime.format(
            "h:mm:ss"
          )} <small>${cityTime.format("A")}</small></div>
        </div> 
        <a href="index.html">All Cities</a>
        `;
}

updateTime();
setInterval(updateTime, 1000);

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);
