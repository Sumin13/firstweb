const clock = document.querySelector("h4#clock");
const clockNy = document.querySelector("h4#clock-ny");
const dateHere = document.querySelector("h3#date-here");
const dateNy = document.querySelector("h3#date-ny");
const clockKorea = document.querySelector("h4#clock-korea");
const dateKorea = document.querySelector("h3#date-korea");

function getDate() {
  const date = new Date();
  const dates = String(date.getDate()).padStart(2, "0");
  const month = date.getMonth() + 1;
  dateHere.innerText = `Today is ${dates}/${month}`;
}

function getClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  clock.innerText = `Time:${hours}:${minutes}:${seconds}`;
}

function getDateKorea() {
  const date = new Date(
    new Date().toLocaleString("en-US", { timeZone: "Asia/Seoul" })
  );
  const dates = String(date.getDate()).padStart(2, "0");
  const month = date.getMonth() + 1;
  dateKorea.innerText = `Today is ${dates}/${month}`;
}

function getKoreaClock() {
  const date = new Date(
    new Date().toLocaleString("en-US", { timeZone: "Asia/Seoul" })
  );
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  clockKorea.innerText = `Time:${hours}:${minutes}:${seconds}`;
}

function getDateNy() {
  const date = new Date(
    new Date().toLocaleString("en-US", { timeZone: "America/New_York" })
  );
  const dates = String(date.getDate()).padStart(2, "0");
  const month = date.getMonth() + 1;
  dateNy.innerText = `Today is ${dates}/${month}`;
}

function getNyClock() {
  const date = new Date(
    new Date().toLocaleString("en-US", { timeZone: "America/New_York" })
  );
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  clockNy.innerText = `Time:${hours}:${minutes}:${seconds}`;
}

getNyClock();
getDateNy();
getClock();
getNyClock();
getDate();
getDateKorea();
getKoreaClock();
setInterval(getClock, 1000);
setInterval(getNyClock, 1000);
setInterval(getKoreaClock, 1000);

function checkServiceStatus(serviceId, endpoint) {
  const statusElement = document.getElementById(serviceId);

  fetch(endpoint)
    .then((response) => {
      if (response.ok) {
        statusElement.textContent = "UP";
        statusElement.classList.add("up");
        statusElement.classList.remove("down");
      } else {
        statusElement.textContent = "DOWN";
        statusElement.classList.add("down");
        statusElement.classList.remove("up");
      }
    })
    .catch((error) => {
      statusElement.textContent = "DOWN";
      statusElement.classList.add("down");
      statusElement.classList.remove("up");
    });
}

// Example: Check the status of Service 1 and Service 2
checkServiceStatus("status1", "https://api.example.com/service1");
checkServiceStatus("status2", "https://api.example.com/service2");
