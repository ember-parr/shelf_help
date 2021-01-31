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
    public class LocationController : ControllerBase
    {
        private ILocationRepository _locationRepo;
        private IUserProfileRepository _userRepo;

        public LocationController(ILocationRepository locationRepo, IUserProfileRepository userRepo)
        {
            _locationRepo = locationRepo;
            _userRepo = userRepo;
        }

        [HttpGet]
        public IActionResult Get()
        {
            var allLocations = _locationRepo.GetAll();
            return Ok(allLocations);            
        }
    }
}

// shouldn't need a post or put methods. 
