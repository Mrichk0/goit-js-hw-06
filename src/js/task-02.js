const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const list = document.querySelector(`#ingredients`);


const addEl = ingredients.map(element => {
  const listElement = document.createElement('li');
  listElement.textContent = `${element}`;
  listElement.classList.add(`.item`);
  
  return listElement;
}) 

list.append(...addEl);







