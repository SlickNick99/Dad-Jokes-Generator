const btnEl = document.getElementById("btn");
const jokeEl = document.getElementById("joke");

const apiKey = "+hZMdUfZrnCs/V8cxx/mxQ==85xzVW6w16sgI9ad";
const options = {
  method: "GET",
  headers: {
    "X-Api-Key": apiKey,
  },
};

const apiURL = "https://api.api-ninjas.com/v1/dadjokes?limit=1";

async function getJoke() {
  try {
    jokeEl.innerText = "Updating...";
    btnEl.disabled = true;
    btnEl.innerText = "Loading...";
    const response = await fetch(apiURL, options);
    const data = await response.json();
    btnEl.disabled = false;
    btnEl.innerText = "Tell me a joke";
    console.log(data[0].joke);
    jokeEl.innerText = data[0].joke;
  } catch (error) {
    console.log(error);
    jokeEl.innerText = "An error happened, try again later";
    btnEl.disabled = false;
    btnEl.innerText = "Tell me a joke";
  }
}

btnEl.addEventListener("click", getJoke);
