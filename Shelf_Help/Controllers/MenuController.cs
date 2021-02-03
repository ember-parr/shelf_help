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

        // get all menus DELETE AFTER TEST
        [HttpGet]
        public IActionResult GetAll()
        {
            var currentUser = GetCurrentUserProfile();
            var menus = _menuRepo.GetAll(currentUser.Id);
            return Ok(menus);
        }


        // get this users menu entries from database
        //[HttpGet("getbyuser/{id}")]
        //public IActionResult GetByUser(int userId)
        //{
        //    var currentUser = GetCurrentUserProfile();
        //    if (currentUser.Id != userId)
        //    {
        //        return Unauthorized();
        //    }
        //    var menues = _menuRepo.GetUsersMenu(userId);
        //    return Ok(menues);
        //}


        // get a menu entry by it's id
        //[HttpGet("{id}")]
        //public IActionResult GetById(int id)
        //{
        //    var currentUser = GetCurrentUserProfile();
        //    var menu = _menuRepo.GetById(id);
        //    if (menu == null)
        //    {
        //        return NotFound();
        //    }

        //    if (currentUser.Id != menu.UserId)
        //    {
        //        return Unauthorized();
        //    }

        //    var ingredients = _menuRepo.GetIngredients(id);
        //    var menuDetails = new MenuDetails()
        //    {
        //        Menu = menu,
        //        Ingredients = ingredients,
        //    };

        //    return Ok(menuDetails);
        //}


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
            var originalMenu = _menuRepo.GetById(id);
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
            var menuToDelete = _menuRepo.GetById(id);
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
