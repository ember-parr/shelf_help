using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Linq;
using System.Security.Claims;
using Shelf_Help.Models;
using Shelf_Help.Repositories;
using Shelf_Help.Models.ViewModels;

namespace Shelf_Help.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class MenuController : ControllerBase
    {
        private IMenuRepository _menuRepo;
        private IFoodItemRepository _foodItemRepo;
        private IMealTypeRepository _mealTypeRepo;
        private IUserProfileRepository _userRepo;

        public MenuController(IMenuRepository menuRepo, IFoodItemRepository foodItemRepo, IMealTypeRepository mealTypeRepo, IUserProfileRepository userRepo)
        {
            _menuRepo = menuRepo;
            _foodItemRepo = foodItemRepo;
            _mealTypeRepo = mealTypeRepo;
            _userRepo = userRepo;
        }

        // get all menus for current user
        [HttpGet]
        public IActionResult GetAll()
        {
            var currentUser = GetCurrentUserProfile();
            var menus = _menuRepo.GetAll(currentUser.Id);
            return Ok(menus);
        }


        // get menus on a certain date
        [HttpGet("day/{date}")]
        public IActionResult GetByDate(DateTime date)
        {
            var currentUser = GetCurrentUserProfile();
            var menus = _menuRepo.GetBySingleDate(date, currentUser.Id);
            return Ok(menus);
        }


        // get menus within a date range
        [HttpGet("range/{startDate}/{endDate}")]
        public IActionResult GetByDateRange(DateTime startDate, DateTime endDate)
        {
            var currentUser = GetCurrentUserProfile();
            var menus = _menuRepo.GetByDateRange(startDate, endDate, currentUser.Id);
            return Ok(menus);
        }


        [HttpGet("{id}")]
        public IActionResult GetById(int id)
        {
            var currentUser = GetCurrentUserProfile();
            var menu = _menuRepo.GetById(id, currentUser.Id);
            return Ok(menu);
        }


        // add a new menu entry
        [HttpPost]
        public IActionResult Post(Menu menu)
        {
            _menuRepo.Add(menu);
            return CreatedAtAction("Get", new { id = menu.Id }, menu);
        }


        // update an existing menu entry
        [HttpPut("{id}")]
        public IActionResult Put(int id, Menu menu)
        {
            var currentUser = GetCurrentUserProfile();
            var originalMenu = _menuRepo.GetById(id, currentUser.Id);
            if(originalMenu == null)
            {
                return NotFound();
            }

            if(id != menu.Id)
            {
                return BadRequest();
            }

            _menuRepo.Update(menu);
            return NoContent();
        }


        // delete an existing menu entry
        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            var currentUser = GetCurrentUserProfile();
            var menuToDelete = _menuRepo.GetById(id, currentUser.Id);
            if (menuToDelete == null)
            {
                return NotFound();
            }
            _menuRepo.Delete(id);
            return NoContent();
        }
        private UserProfile GetCurrentUserProfile()
        {
            var firebaseUserId = User.FindFirst(ClaimTypes.NameIdentifier).Value;
            return _userRepo.GetByFirebaseUserId(firebaseUserId);
        }

    }
}


// no need for a get all method in this controller. menu is user specific.
