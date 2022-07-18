const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const ingredientsRef = document.querySelector("#ingredients")

const makeIngredientsList = (elementList) => {
  return elementList.map((item) => {
    const list = document.createElement('li')
    list.textContent = item;
    list.classList.add = ("item");
    return list
 }) 
} 

const ingredientsList = makeIngredientsList(ingredients);
ingredientsRef.append(... ingredientsList)

