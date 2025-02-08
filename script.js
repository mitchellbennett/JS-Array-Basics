
let favouriteFoods = ['Chicken,', 'Pizza,', 'Eggs,', 'Cookies,', 'Tacos'];
let favouriteNumbers = [27, 14, 2, 44, 57]

console.log(favouriteFoods);
console.log(favouriteNumbers);

let favFood1 = (favouriteFoods[0]);
let favFood3 = (favouriteFoods[2]);
let favFood5 = (favouriteFoods[4]);

console.log(favFood1, favFood3, favFood5);
console.log(favouriteNumbers.length);

favouriteNumbers.push(100);
console.log(favouriteNumbers);

favouriteFoods.pop();
console.log(favouriteFoods);

favouriteFoods.push('Ice Cream');
console.log(favouriteFoods);

let favouriteDesserts = favouriteFoods.slice(3,5);
console.log(favouriteDesserts);

for (let i = 0; i < favouriteNumbers.length; i++){
    console.log(favouriteNumbers[i]);
}

let [firstFood, secondFood] = favouriteFoods;
console.log(firstFood, secondFood);
