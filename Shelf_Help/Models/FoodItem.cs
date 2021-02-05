using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Shelf_Help.Models
{
    public class FoodItem
    {
        public int Id { get; set; }

        [Required]
        public int Quantity { get; set; }

        public int SpoonacularIngredientId { get; set; }

        [MaxLength(255)]
        public string Measurement { get; set; }

        [Required]
        public int UserId { get; set; }

        [Required]
        public int LocationId { get; set; }
        public Location Location { get; set; }

        public string FoodName { get; set; }
        
    }
}
