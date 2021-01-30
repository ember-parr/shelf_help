using Microsoft.EntityFrameworkCore;
using Shelf_Help.Data;
using Shelf_Help.Models;
using Shelf_Help.Models.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;


namespace Shelf_Help.Repositories
{
    public class MenuRepository : IMenuRepository
    {
        private ApplicationDbContext _context;

        public MenuRepository(ApplicationDbContext context)
        {
            _context = context;
        }

        //get a menu entry by Id
        public Menu GetById(int id)
        {
            return _context.Menu
                .Where(m => m.Id == id)
                .FirstOrDefault();
        }

        // get all menu entries by userId 
        public List<MenuSummary> GetUsersMenu(int userId)
        {
            return _context.Menu
                .Include(m => m.MenuType)
                .Where(m => m.UserId == userId)
                .OrderByDescending(m => m.Date)
                .Select(m => new MenuSummary()
                {
                    Id = m.Id,
                    Date = m.Date,
                    Custom = m.Custom,
                    Spoonacular_RecipeId = m.Spoonacular_RecipeId,
                    TypeId = m.TypeId,
                    UserId = m.UserId,
                    UserProfile = m.UserProfile,
                    MealType = m.MenuType,
                    Ingredients = m.Ingredients,
                    ImageSource = m.MealName
                })
                .ToList();
        }

        // get todays menu entries for current user




        // get a menu entries food items
        public List<IngredientsList> GetIngredients(int menuId)
        {
            return _context.Menu
                .Select(m => new IngredientsList()
                {
                    FoodItem = m.Ingredients[0],
                    IngredientCount = m.Ingredients.Count()
                })
                .ToList();

        }

        // add a new menu entry to the database
        public void Add(Menu menu)
        {
            _context.Add(menu);
            _context.SaveChanges();
        }


        // update an existing menu entry in the database
        public void Update(Menu menu)
        {
            var local = _context.Set<Menu>()
                .Local
                .FirstOrDefault(entry => entry.Id.Equals(menu.Id));
            if (local != null)
            {
                _context.Entry(local).State = EntityState.Detached;
            }

            _context.Entry(menu).State = EntityState.Modified;
            _context.SaveChanges();
        }


        // delete a menu entry
        public void Delete(int id)
        {
            // I don't think i need any related info deleted....
            var MenuToDelete = _context.Menu
                .Where(m => m.Id == id);
        }
    }
}
