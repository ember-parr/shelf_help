using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.Json.Serialization;
using System.Threading.Tasks;

namespace Shelf_Help.Models.ViewModels
{
    public class LocationOption
    {
        public int Id { get; set; }
        public string Name { get; set; }

        [JsonIgnore]
        public string LocationName { get; set; }
    }
}
