using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Shelf_Help.Models.ViewModels
{
    public class MenuDetails
    {
        public Menu Menu { get; set; }
        public List<FoodItem> Ingredients { get; set; }
        public MealType MealType { get; set; }

    }
}
