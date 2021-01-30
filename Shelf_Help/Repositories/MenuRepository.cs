using Microsoft.EntityFrameworkCore;
using Shelf_Help.Data;
using Shelf_Help.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Shelf_Help.Repositories
{
    public class MenuRepository
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

        public List<MenuSummary> Get()
        {


        }
    }
}
