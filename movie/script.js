const API_KEY = "8b4760b7";
const searchInput = document.getElementById('movieInput');
const searchBtn = document.getElementById('searchBtn');
const resultDiv = document.getElementById('result');

searchBtn.addEventListener('click', searchMovie);

async function searchMovie() {
  const movieTitle = searchInput.value.trim();
  if (!movieTitle) {
    resultDiv.innerHTML = `<p>❗ Please enter a movie title.</p>`;
    return;
  }

  resultDiv.innerHTML = `<p>🔎 Searching for "${movieTitle}"...</p>`;

  const url = `https://www.omdbapi.com/?apikey=${API_KEY}&t=${encodeURIComponent(movieTitle)}`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.Response === "False") {
      resultDiv.innerHTML = `<p>❌ ${data.Error}</p>`;
      return;
    }

    resultDiv.innerHTML = `
      <div class="movie-card">
        <img src="${data.Poster !== "N/A" ? data.Poster : 'https://via.placeholder.com/200x300?text=No+Image'}" alt="${data.Title} Poster">
        <h2>${data.Title} (${data.Year})</h2>
        <p><strong>Genre:</strong> ${data.Genre}</p>
        <p><strong>Director:</strong> ${data.Director}</p>
        <p><strong>Plot:</strong> ${data.Plot}</p>
        <p><strong>IMDB Rating:</strong> ⭐ ${data.imdbRating}</p>
      </div>
    `;
  } catch (error) {
    resultDiv.innerHTML = `<p>⚠️ Error fetching movie data.</p>`;
    console.error(error);
  }
}
