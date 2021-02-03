// this needs to create a meal item object that matches the calendar format
// similar to itemTableRow in Totelly project



export const MealItemObject = (meal) => {


    const mealDetails = {
        id: `${meal.id}`,
        location: "",
        subject: `${meal.title}`
    }


    // add to calendar based on meal type entered
    if (meal.MealTypeId === 1) {
        mealDetails.calendar = "Breakfast"
        mealDetails.background = "#fce181"
        // mealDetails.start = new Date(2020, )
        // mealDetails.end = new Date(idfk )
    } else if (meal.MealTypeId === 2) {
        mealDetails.calendar = "Brunch"
    } else if (meal.MealTypeId === 3) {
        mealDetails.calendar = "Lunch"
    } else if (meal.MealTypeId === 4) {
        mealDetails.calendar = "Dinner"
    } else if (meal.MealTypeId === 5) {
        mealDetails.calendar = "Snack"
    } else {
        mealDetails.calendar = "other"
    }

    return mealDetails;
}