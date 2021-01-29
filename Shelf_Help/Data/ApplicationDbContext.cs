using Microsoft.EntityFrameworkCore;
using Shelf_Help.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Shelf_Help.Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
        {

        }

        public DbSet<FoodItem> FoodItem { get; set; }
        public DbSet<Location> Location { get; set; }
        public DbSet<UserProfile> UserProfile { get; set; }
        public DbSet<MealType> MealType { get; set; }
        public DbSet<Menu> Menu { get; set; }
    }
}
