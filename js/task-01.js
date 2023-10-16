const items = document.querySelectorAll('.item')
console.log('Number of categories: ' + [...items].length);
console.log('');

items.forEach(item => {
    const firstListItem = item.firstElementChild;
    console.log(`Category: ${firstListItem.textContent}`);
    // const h2 = document.querySelector('h2');
    // console.log(`Category: ${h2.textContent}`);

    const elements = item.lastElementChild.children;
    // const elements = item.querySelectorAll('li');
    console.log(`Elements: ${[...elements].length}`);
    console.log('');
});