using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Shelf_Help.Models.ViewModels
{
    public class MenuSummary
    {
        public int Id { get; set; }
        public DateTime Date { get; set; }
        public Boolean Custom { get; set; }
        public int Spoonacular_RecipeId { get; set; }
        public int TypeId { get; set; }
        public int UserId { get; set; }
        public UserProfile UserProfile { get; set; }
        public MealType MenuType { get; set; }
        public List<FoodItem> Ingredients { get; set; }

        // need to finish this 
    }
}
