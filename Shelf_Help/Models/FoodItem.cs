using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace Shelf_Help.Models
{
    [Table("Shelf_Help")]
    public class FoodItem
    {
        public int Id { get; set; }

        [Required]
        public int Quantity { get; set; }

        public int Spoonacular_IngredientId { get; set; }

        [MaxLength(255)]
        public string Measurement { get; set; }

        [Required]
        public int UserId { get; set; }

        [Required]
        public int LocationId { get; set; }

    }
}
