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
    public class MealTypeController : ControllerBase
    {
        private IMealTypeRepository _mealTypeRepo;
        private IUserProfileRepository _userRepo;

        public MealTypeController(IMealTypeRepository mealTypeRepo, IUserProfileRepository userRepo)
        {
            _mealTypeRepo = mealTypeRepo;
            _userRepo = userRepo;
        }

        [HttpGet]
        public IActionResult Get()
        {
            var allMealTypes = _mealTypeRepo.GetAll();
            return Ok(allMealTypes);
        }

        [HttpGet("{id}")]
        public IActionResult GetById(int id)
        {
            return Ok(_mealTypeRepo.GetById(id));
        }
    }
}

// shouldn't need a post or put methods.... included User repo info but can likely remove later, not currently used. 
