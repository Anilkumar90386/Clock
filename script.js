const quotes = [
    "The best way to predict the future is to invent it.",
    "Life is 10% what happens to us and 90% how we react to it.",
    "The only limit to our realization of tomorrow is our doubts of today.",
    "Do something today that your future self will thank you for.",
    "Success usually comes to those who are too busy to be looking for it.",
    "Don’t watch the clock; do what it does. Keep going."
  ];
  
  const quoteElement = document.getElementById('quote');
  const newQuoteButton = document.getElementById('new-quote-btn');
  
  newQuoteButton.addEventListener('click', () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    quoteElement.textContent = quotes[randomIndex];
  });
  