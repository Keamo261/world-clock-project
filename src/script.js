setInterval(function () {
  //Sydney
  let sydneyElement = document.querySelector("#sydney");
  let sydneyDate = sydneyElement.querySelector(".date");
  let sydneyTimeElement = sydneyElement.querySelector(".time");
  let sydneyTime = moment().tz("Australia/Sydney");

  sydneyDate.innerHTML = sydneyTime.format("MMMM Do, YYYY");
  sydneyTimeElement.innerHTML = `${sydneyTime.format("h:mm:ss")}
<small>${sydneyTime.format("A")}</small>`;

  //LA
  let laElement = document.querySelector("#la");
  let laDate = laElement.querySelector(".date");
  let laTimeElement = laElement.querySelector(".time");
  let laTime = moment().tz("America/Los_Angeles");

  laDate.innerHTML = laTime.format("MMMM Do, YYYY");
  laTimeElement.innerHTML = `${laTime.format("h:mm:ss")}
<small>${laTime.format("A")}</small>`;
});
