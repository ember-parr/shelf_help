
let recipeDetails = {};

export const RecipeInfoProvider = (menu) => {

    const recipeId = menu.spoonacularRecipeId;
    const getFullRecipe = (recipeId) => {
        return fetch(`https://api.spoonacular.com/recipes/${recipeId}/information?apiKey=66e7421be84e4b16a934c4ad2b86bfd4`)
        .then(response => response.json())
        .then(parsedRecipe => {
            recipeDetails = parsedRecipe[0];
        })
    };

    getFullRecipe(recipeId);
    

    return recipeDetails;
}