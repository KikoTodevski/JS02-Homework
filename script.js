//Objects exam
var favoriteRecipe = {
    title: "Mole",
    servings: 2,
    ingredients: [" cinnamon, cumin, cocoa "]
};

console.log(favoriteRecipe.title);
console.log("Servings:" + favoriteRecipe.servings);
console.log("Ingredients:" + favoriteRecipe.ingredients);

//Arrays exam
var programmingLanguages = [
    "C", "C++", "C#", "Java", "Javascript", "Kotlin", "MySQL", "Python"
];

console.log(programmingLanguages);
console.log(programmingLanguages.length);

programmingLanguages.pop();
console.log(programmingLanguages);

programmingLanguages.splice(2,1, "PHP");
console.log(programmingLanguages);