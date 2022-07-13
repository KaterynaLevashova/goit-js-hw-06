const categoryEl = document.querySelectorAll('.item');
const numberCategoryEl = categoryEl.length;
console.log('Number of categories:', numberCategoryEl);
categoryEl.forEach( el => {
    const numberOfElements = el.querySelectorAll('li');
    const titleOfElements = el.querySelector('h2');
    console.log(`Category: ${titleOfElements.textContent}`);
    console.log(`Elements: ${numberOfElements.length}`);
});