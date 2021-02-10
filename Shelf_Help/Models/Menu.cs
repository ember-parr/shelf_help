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

        public int SpoonacularRecipeId { get; set; }

        [Required]
        public int MealTypeId { get; set; }

        [Required]
        public int UserId { get; set; }

        public string Name { get; set; }

        public MealType MealType { get; set; }
        

    }
}
