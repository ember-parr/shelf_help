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
    public class LocationRepository
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
        public List<LocationItem> GetAll()
        {
            return _context.Location
                .Select(l => new LocationItem()
                {
                    Id = l.Id,
                    Name = l.Name
                })
                .ToList();
        }
    }
}
