document.getElementById('searchBtn').addEventListener('click', searchCocktail);

function searchCocktail() {
    const cocktailName = document.getElementById('cocktailName').value;
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${cocktailName}`)
        .then(response => response.json())
        .then(data => {
            displayResults(data.drinks);
        })
        .catch(error => console.error('Error fetching the cocktail:', error));
}

function displayResults(cocktails) {
    const results = document.getElementById('results');
    results.innerHTML = '';
    if (cocktails) {
        cocktails.forEach(cocktail => {
            const cocktailDiv = document.createElement('div');
            cocktailDiv.classList.add('cocktail');
            cocktailDiv.innerHTML = `
                <h2>${cocktail.strDrink}</h2>
                <img src="${cocktail.strDrinkThumb}" alt="${cocktail.strDrink}">
                <p><strong>Ingredients:</strong></p>
                <ul>
                    ${getIngredients(cocktail).map(ingredient => `<li>${ingredient}</li>`).join('')}
                </ul>
                <p><strong>Instructions:</strong> ${cocktail.strInstructions}</p>
            `;
            results.appendChild(cocktailDiv);
        });
    } else {
        results.innerHTML = '<p>No cocktails found</p>';
    }
}

function getIngredients(cocktail) {
    let ingredients = [];
    for (let i = 1; i <= 15; i++) {
        const ingredient = cocktail[`strIngredient${i}`];
        const measure = cocktail[`strMeasure${i}`];
        if (ingredient) {
            ingredients.push(`${measure ? measure : ''} ${ingredient}`);
        } else {
            break;
        }
    }
    return ingredients;
}
