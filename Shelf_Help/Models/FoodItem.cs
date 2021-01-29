using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Shelf_Help.Models
{
    public class FoodItem
    {
        public int Id { get; set; }

        public int Quantity { get; set; }

        public int Spoonacular_IngredientId { get; set; }

        public string Measurement { get; set; }

        public int UserId { get; set; }

        public int LocationId { get; set; }
    }
}
