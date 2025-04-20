async function convertCurrency() {
    const amount = document.getElementById('amount').value;
    const fromCurrency = document.getElementById('fromCurrency').value;
    const toCurrency = document.getElementById('toCurrency').value;
    const resultDiv = document.getElementById('result');
  
    // Check if the amount is valid
    if (!amount || amount <= 0) {
      resultDiv.innerHTML = "Please enter a valid amount.";
      return;
    }
  
    resultDiv.innerHTML = "Loading...";
  
    const apiKey = "5335c403118e453a845a3606"; // Replace with your API key from exchangerate-api.com
    const url = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/${fromCurrency}`;
  
    try {
      const response = await fetch(url);
      const data = await response.json();
  
      if (data.result !== "success") {
        throw new Error("Currency conversion failed");
      }
  
      const conversionRate = data.conversion_rates[toCurrency];
      const convertedAmount = (amount * conversionRate).toFixed(2);
  
      resultDiv.innerHTML = `${amount} ${fromCurrency} = ${convertedAmount} ${toCurrency}`;
    } catch (error) {
      resultDiv.innerHTML = `❌ ${error.message}`;
    }
  }
  
  // Event listener for the Convert button
  document.getElementById("convertBtn").addEventListener("click", convertCurrency);
