function checkCheckbox() {}

function displayDestination(response) {
  new Typewriter("#result", {
    strings: `Destination that matches your parameters: ${response.data.answer}`,
    autoStart: true,
    delay: 5,
    cursor: "",
  });
}

function generateDestination(event) {
  event.preventDefault();
  checkCheckbox();

  let budgetSelect = document.querySelector("#budget");
  let temperatureSelect = document.querySelector("#temperature");
  let withSelect = document.querySelector("#with");
  let beachRequirement = document.querySelector("#requirement1");
  let divingRequirement = document.querySelector("#requirement2");
  let hikingRequirement = document.querySelector("#requirement3");
  let museumsRequirement = document.querySelector("#requirement4");
  let shoppingRequirement = document.querySelector("#requirement5");
  let nightlifeRequirement = document.querySelector("#requirement6");

  let beachCheck = "";
  let divingCheck = "";
  let hikingCheck = "";
  let museumsCheck = "";
  let shoppingCheck = "";
  let nightlifeCheck = "";

  let checkbox1 = document.getElementById("requirement1");
  if (checkbox1.checked) {
    beachCheck = beachRequirement.value.trim();
  }

  let checkbox2 = document.getElementById("requirement2");
  if (checkbox2.checked) {
    divingCheck = divingRequirement.value.trim();
  }

  let checkbox3 = document.getElementById("requirement3");
  if (checkbox3.checked) {
    hikingCheck = hikingRequirement.value.trim();
  }

  let checkbox4 = document.getElementById("requirement4");
  if (checkbox4.checked) {
    museumsCheck = museumsRequirement.value.trim();
  }

  let checkbox5 = document.getElementById("requirement5");
  if (checkbox5.checked) {
    shoppingCheck = shoppingRequirement.value.trim();
  }

  let checkbox6 = document.getElementById("requirement6");
  if (checkbox6.checked) {
    nightlifeCheck = nightlifeRequirement.value.trim();
  }

  let userText = document.querySelector("#userText");
  let apiKey = "cod41486ffe6a312c3etdae40ba5185f";
  let prompt = `User selected and inputed instructions: Generate a ${
    temperatureSelect.value
  } destination with a ${
    budgetSelect.value
  } budget for a person that travels with ${
    withSelect.value
  } also destination should have ${userText.value.trim()} and ${beachCheck} ${divingCheck} ${hikingCheck} ${museumsCheck} ${shoppingCheck} ${nightlifeCheck}`;
  let context =
    "You are a travel agent and an expert in choosing destinations by parameters. Your mission is to write the resukt message in basic HTML without any additional symbols. Write one country name in format <strong>Country name</strong>. Then write <br/>. Then in a new line write in one short sentence what this destination is known for or what you can discover there. Make sure to follow user-selected and inputed instructions.";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let destinationElement = document.querySelector("#result");
  destinationElement.classList.remove("hidden");
  destinationElement.innerHTML = `<div class="loader"></div>`;

  axios.get(apiUrl).then(displayDestination);

  console.log(prompt);
}

let destinationFormElement = document.querySelector("#generator-form");
destinationFormElement.addEventListener("submit", generateDestination);
