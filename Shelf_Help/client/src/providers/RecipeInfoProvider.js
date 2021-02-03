

export const RecipeInfoProvider = (menu) => {
    const spoonacualrAPIInformation = `https://api.spoonacular.com/recipes/${menu.spoonacularRecipeId}/information`

    return spoonacualrAPIInformation;
}