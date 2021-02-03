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

        // get all menus for current user
        public List<Menu> GetAll(int id)
        {
            return _context.Menu
                .Include(m => m.MealType)
                .Where(m => m.UserId == id)
                .ToList();
        }

        //get a menu entry by Id
        public Menu GetById(int id)
        {
            return _context.Menu
                .Where(m => m.Id == id)
                .FirstOrDefault();
        }

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
