const confirmedCases = document.getElementById("confirmed-cases");
const suspectCases = document.getElementById("suspect-cases");
const rejectedCases = document.getElementById("rejected-cases");
const deaths = document.getElementById("deaths");
const lastUpdate = document.getElementById("last-update");

window.addEventListener("load", async () => {
  const response = await fetch(
    "https://covid19-brazil-api.now.sh/api/report/v1/brazil/uf/go"
  );
  const responseData = await response.json();

  //Formatando a data de atualização
  //Pegando o dia de atualização
  let dateOfLastUpdate = responseData.datetime.split("T")[0];
  const yearOfLastUpdate = dateOfLastUpdate.split("-")[0];
  const monthOfLastUpdate = dateOfLastUpdate.split("-")[1];
  const dayOfLastUpdate = dateOfLastUpdate.split("-")[2];

  dateOfLastUpdate = `${dayOfLastUpdate}-${monthOfLastUpdate}-${yearOfLastUpdate}`;

  //Pegando a hora de atualização
  const timeOfLastUpdate = responseData.datetime.split("T")[1];
  const exactTimeOfLastUpdate = timeOfLastUpdate.split(".")[0];

  confirmedCases.innerText = responseData.cases;
  suspectCases.innerText = responseData.suspects;
  rejectedCases.innerText = responseData.refuses;
  deaths.innerText = responseData.deaths;
  lastUpdate.innerHTML = `${dateOfLastUpdate} <br> ${exactTimeOfLastUpdate}`;
});
