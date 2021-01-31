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
        public MealType MealType { get; set; }
        public List<FoodItem> Ingredients { get; set; }

        public string MealName { get; set; }

        public string ImageSource { get; set; }

        // i might want to add a list of tips, or turn instructions into a list
        // unsure what else is needed here. 
    }
}
