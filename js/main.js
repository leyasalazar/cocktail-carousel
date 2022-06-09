//The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM
document.querySelector('button').addEventListener('click', getDrink)
function getDrink(){
  let drink = document.querySelector('input').value
  const interval = setInterval(function() {
    startCarousel();
  }, 5000)
  let index = 0

  fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drink}`)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
      document.querySelector('h2').innerText = data.drinks[0].strDrink
      document.querySelector('img').src = data.drinks[0].strDrinkThumb
      document.querySelector('p').innerText = data.drinks[0].strInstructions

      const image = document.querySelector('img')
      const title = document.querySelector('h2')
      const instructions = document.querySelector('p')

      startCarousel = () => {
        index += 1
        if(index < data['drinks'].length) {
          image.src = data.drinks[index].strDrinkThumb
          title.innerText = data.drinks[index].strDrink
          instructions.innerText = data.drinks[index].strInstructions
        } else {
          index = 0
          image.src = data.drinks[index].strDrinkThumb
          title.innerText = data.drinks[index].strDrink
          instructions.innerText = data.drinks[index].strInstructions
        }
      }
    })
    .catch(err => {
        console.log(`error ${err}`)
    });
}

