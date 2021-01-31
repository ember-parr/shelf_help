using Shelf_Help.Data;
using Shelf_Help.Models;
using Shelf_Help.Models.ViewModels;
using Microsoft.AspNetCore.Authorization;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Shelf_Help.Repositories
{
    public class LocationRepository : ILocationRepository
    {
        private ApplicationDbContext _context;

        public LocationRepository(ApplicationDbContext context)
        {
            _context = context;
        }

        //get a location by id
        public Location GetById(int id)
        {
            return _context.Location
                .Where(l => l.Id == id)
                .FirstOrDefault();
        }

        // get all locations
        public List<Location> GetAll()
        {
            return _context.Location.ToList();
        }
    }
}
