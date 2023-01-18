const store = new Store();
const milk1 = new Milk('Milk1', 'CompanyA', 12.4, 2.5);
const milk2 = new Milk('Milk2', 'CompanyB', 11.9, 1.5);
const milk3 = new Milk('Milk3', 'CompanyC', 10.5, 1);
const chocolate1 = new Chocolate('Chocolate1', 'CompanyA', 10.9, 'white');
const chocolate2 = new Chocolate('Chocolate2', 'CompanyB', 12.9, 'black');
const chocolate3 = new Chocolate('Chocolate3', 'CompanyC', 15.1, 'black with nuts');
const wine1 = new Wine('Wine1', 'CompanyA', 55.4, 18+'%');
const wine2 = new Wine('Wine2', 'CompanyB', 60.9, 12+'%');
const wine3 = new Wine('Wine3', 'CompanyC', 50.9, 8.5+'%');

store.addProduct(milk1);
store.addProduct(milk2);
store.addProduct(milk3);
store.addProduct(chocolate1);
store.addProduct(chocolate2);
store.addProduct(chocolate3);
store.addProduct(wine1);
store.addProduct(wine2);
store.addProduct(wine3);

console.log(store.getAllProducts());
console.log(store.getByType('Milk'));
console.log(store.getByType('Chocolate'));
console.log(store.getByType('Wine'));