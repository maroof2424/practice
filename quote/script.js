const API_KEY = "OfMjP9lNIgj5isj/9O389A==h2OZ7YAPYaRtVWjG"; // Replace with your actual API key
const quoteDiv = document.getElementById('quoteDiv');
const fetchQuoteBtn = document.getElementById('fetchQuoteBtn');

fetchQuoteBtn.addEventListener('click', fetchQuote);

async function fetchQuote() {
  const url = `https://api.api-ninjas.com/v1/quotes?category=inspire`;

  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'X-Api-Key': API_KEY
      }
    });
    const data = await response.json();

    if (data && data.length > 0) {
      const quote = data[0].quote;
      const author = data[0].author;

      quoteDiv.innerHTML = `
        <p>"${quote}"</p>
        <p>- ${author}</p>
      `;
    } else {
      quoteDiv.innerHTML = '<p>No quote found. Try again later.</p>';
    }
  } catch (error) {
    quoteDiv.innerHTML = '<p>Error fetching quote. Please try again later.</p>';
    console.error(error);
  }
}
