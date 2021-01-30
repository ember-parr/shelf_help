using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using Shelf_Help.Models;
using Shelf_Help.Repositories;


namespace Shelf_Help.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize]
    public class UserProfileController : ControllerBase
    {
        private readonly IUserProfileRepository _repo;
        public UserProfileController(IUserProfileRepository repo)
        {
            _repo = repo;
        }

        [HttpGet("{FirebaseUserId}")]
        public IActionResult GetUserProfile(string firebaseUserId)
        {
            var user = _repo.GetByFirebaseUserId(firebaseUserId);
            if (user == null)
            {
                return NotFound();
            }

            return Ok(user);
        }


        [HttpPost]
        public IActionResult Post(UserProfile userProfile)
        {
            _repo.Add(userProfile);
            return CreatedAtAction(
                nameof(GetUserProfile),
                new { FirebaseUserId = userProfile.FirebaseUserId },
                userProfile);
        }


        private UserProfile GetCurrentUserProfile()
        {
            var firebaseUserId = User.FindFirst(ClaimTypes.NameIdentifier).Value;
            return _repo.GetByFirebaseUserId(firebaseUserId);
        }
    }
}



// no need for a GetAll action on users. 