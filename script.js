function fetchChuckNorrisJoke() {
    const jokeCard = document.getElementById('jokeCard');
    
    // Remove show class to reset animation
    jokeCard.classList.remove('show');

    fetch('https://api.chucknorris.io/jokes/random')
        .then(response => response.json())
        .then(data => {
            const joke = data.value; // Extract the joke text from the response
            const jokeElement = document.getElementById('joke');
            jokeElement.textContent = joke;

            // Add show class to trigger animation
            jokeCard.classList.add('show');
        })
        .catch(error => console.error('Error fetching Chuck Norris joke:', error));
}
