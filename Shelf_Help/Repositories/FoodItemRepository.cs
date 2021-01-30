using Microsoft.EntityFrameworkCore;
using Shelf_Help.Data;
using Shelf_Help.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Shelf_Help.Repositories
{
    public class FoodItemRepository : IFoodItemRepository
    {

        private ApplicationDbContext _context;

        public FoodItemRepository(ApplicationDbContext context)
        {
            _context = context;
        }

        //get a foodItem by id
        public FoodItem GetById(int id)
        {
            return _context.FoodItem
                .Where(f => f.Id == id)
                .FirstOrDefault();
        }

        //get foodItems by user with quantity > 0
        public List<FoodItem> GetUsersFoodItems(int userId)
        {
            return _context.FoodItem
                .Where(f => f.UserId == userId)
                .Where(f => f.Quantity >= 1)
                .ToList();
        }

        //add a new food item to the database
        public void Add(FoodItem foodItem)
        {
            _context.Add(foodItem);
            _context.SaveChanges();
        }

        //update a food item in the database
        public void Update(FoodItem foodItem)
        {
            var local = _context.Set<FoodItem>()
                .Local
                .FirstOrDefault(entry => entry.Id.Equals(foodItem.Id));
            // check for a local null value
            if (local != null)
            {
                // detach
                _context.Entry(local).State = EntityState.Detached;
            }
            _context.Entry(foodItem).State = EntityState.Modified;
            _context.SaveChanges();
        }
    }
}
