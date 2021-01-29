using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;

namespace Shelf_Help.Models
{
    public class UserProfile
    {
        public int Id { get; set; }

        [Required]
        [MaxLength(28)]
        public string FirebaseUserId { get; set; }

        [Required]
        [MaxLength(50)]
        public string DisplayName { get; set; }
        
        [Required]
        [DataType(DataType.EmailAddress)]
        public string Email { get; set; }

        [Required]
        public int ZipCode { get; set; }

        [Required]
        [DataType(DataType.PhoneNumber)]
        public string Phone { get; set; }

        public List<FoodItem> FoodItems { get; set; }
        
    }
}
