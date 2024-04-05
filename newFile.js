fetch(url + "big mac")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    let myMeal = data.meals[0];
    console.log(myMeal);
    console.log(myMeal.strMealThumb);
    console.log(myMeal.strMeal);
    console.log(myMeal.strArea);
    console.log(myMeal.strInstructions);
    let count = 1;
    let ingredients = [];
    for (let i in myMeal) {
      let ingredient = "";
      let measure = "";
      if (i.startsWith("strIngredient") && myMeal[i]) {
        ingredient = myMeal[i];
        measure = myMeal["strMeasure" + count];
        count += 1;
        ingredient.push("${measure} ${ingredient}");
      }
    }
    console.log(ingredients);

    result.innerHTML = "<img src=$ {myMeal.strMealThumb}>";
  });