const jokeBtn = document.getElementById('jokeBtn');
const jokeBox = document.getElementById('joke');

async function getJoke() {
  jokeBox.textContent = "Loading...";
  try {
    const response = await fetch("https://v2.jokeapi.dev/joke/Any?type=single");
    const data = await response.json();

    if (data.joke) {
      jokeBox.textContent = data.joke;
    } else {
      jokeBox.textContent = "Oops! Couldn't fetch a joke right now.";
    }
  } catch (error) {
    jokeBox.textContent = "Failed to load joke 😢";
    console.error("Error:", error);
  }
}

jokeBtn.addEventListener('click', getJoke);
