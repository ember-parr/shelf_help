using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Text.Json.Serialization;

namespace Shelf_Help.Models.ViewModels
{
    public class MealOption
    {
        public int Id { get; set; }
        public string Name { get; set; }

        [JsonIgnore]
        public string MealOptionName { get; set; }
    }
}
