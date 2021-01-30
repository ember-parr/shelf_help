using Microsoft.EntityFrameworkCore;
using Shelf_Help.Data;
using Shelf_Help.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Shelf_Help.Repositories
{

    public class UserProfileRepository : IUserProfileRepository
    {
        private readonly ApplicationDbContext _context;

        public UserProfileRepository(ApplicationDbContext context)
        {
            _context = context;
        }

        public UserProfile GetByFirebaseUserId(string firebaseUserId)
        {
            return _context.UserProfile
                //.Include(up => up.FoodItems)
                //.Include(up => up.Menu)
                .FirstOrDefault(up => up.FirebaseUserId == firebaseUserId);

        }


        // get a user by their ID
        // will this be used??
        public UserProfile GetById(int id)
        {
            return _context.UserProfile
                .FirstOrDefault(u => u.Id == id);
        }


        // add a new user from registration
        public void Add(UserProfile userProfile)
        {
            _context.Add(userProfile);
            _context.SaveChanges();
        }




    }

}
