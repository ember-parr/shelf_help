using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Shelf_Help.Models.ViewModels
{
    public class IngredientsList
    {
        // WHAT TO DO... WHAT TO DOOOO 


        // OPTION ONE: a list of ingredients
        public List<FoodItem> Ingredients { get; set; }
        
        // OPTION TWO: a single food item 
        public FoodItem FoodItem { get; set; }
        public int SpoonacularId { get; set; }
        public string Measurement { get; set; }
    }
}
