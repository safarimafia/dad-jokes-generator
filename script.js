const btnEl = document.getElementById("btn")

const apiKey = "Q4Z3OHsab075pylf31mzRQ==NMmfUlY3S00LBUMN";

const jokeEl = document.getElementById("joke")

const options = {
    method: "GET",
    headers: {
        "X-Api-Key": apiKey,
    },
};

const apiURL = "https://api.api-ninjas.com/v1/dadjokes?limit=1";


async function getJoke(){
    try {
    jokeEl.innerText = "Updating...";
    btnEl.disabled = true;
    btnEl.innerText = "Loading...";
    const response = await fetch(apiURL, options);
    const data = await response.json();

    btnEl.disabled = false;
    btnEl.innerText = "What would Thash say?";


    jokeEl.innerText = data[0].joke;
        
    } catch (error) {
        
    jokeEl.innerText = "An error happened, try again later"
        console.log(error)
        btnEl.disabled = false;
        btnEl.innerText = "Tell me a joke";
        
    }
    
}

btnEl.addEventListener("click", getJoke);

$(function() {
    function beerRise() {
      $('.coffee').addClass('fill');
    }
    function pourBeer() {
      $('.pour').addClass('pouring');
      beerRise();
      setTimeout(function() {
        $('.pour').addClass('end');
      }, 1500);
    }
    setTimeout(function() {
      pourBeer();
    }, 1500);
  });