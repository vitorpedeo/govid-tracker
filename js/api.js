const confirmedCases = document.getElementById("confirmed-cases");
const suspectCases = document.getElementById("suspect-cases");
const refusedSuspects = document.getElementById("refused-suspects");
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

  confirmedCases.innerText = responseData.cases;
  suspectCases.innerText = responseData.suspects;
  refusedSuspects.innerText = responseData.refuses;
  deaths.innerText = responseData.deaths;
  lastUpdate.innerHTML = `${dateOfLastUpdate}`;
});
