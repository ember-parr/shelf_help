using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Shelf_Help.Models
{
    public class Menu
    {
        public int Id { get; set; }

        [Required]
        [DataType(DataType.DateTime)]
        public DateTime Date { get; set; }

        [Required]
        public bool Custom { get; set; }

        public int Spoonacular_RecipeId { get; set; }

        [Required]
        public int TypeId { get; set; }

        [Required]
        public int UserId { get; set; }
        public UserProfile UserProfile { get; set; }
        public MealType MenuType { get; set; }
        public List<FoodItem> Ingredients { get; set; }

        public string MealName { get; set; }

    }
}
