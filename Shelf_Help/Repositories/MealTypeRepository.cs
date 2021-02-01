using Shelf_Help.Data;
using Shelf_Help.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Shelf_Help.Repositories
{
    public class MealTypeRepository : IMealTypeRepository
    {
        private ApplicationDbContext _context;

        public MealTypeRepository(ApplicationDbContext context)
        {
            _context = context;
        }

        public List<MealType> GetAll()
        {
            return _context.MealType.ToList();
        }

        //get a location by id
        public MealType GetById(int id)
        {
            return _context.MealType
                .Where(n => n.Id == id)
                .FirstOrDefault();
        }

        // get all locations
        //public List<MealOption> GetAll()
        //{
        //    return _context.MealType
        //        .Select(l => new MealOption()
        //        {
        //            Id = l.Id,
        //            Name = l.Name
        //        })
        //        .ToList();
        //}
    }
}
