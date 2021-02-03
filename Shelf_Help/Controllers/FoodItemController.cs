using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
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
    public class FoodItemController : ControllerBase
    {
        private readonly IFoodItemRepository _foodItemRepo;
        private readonly IMenuRepository _menuRepo;
        private readonly IUserProfileRepository _userRepo;

        public FoodItemController(IFoodItemRepository foodRepo, IMenuRepository menuRepo, IUserProfileRepository userRepo)
        {
            _foodItemRepo = foodRepo;
            _menuRepo = menuRepo;
            _userRepo = userRepo;
        }

        // get food items by user
        [HttpGet("getmyfood/{id}")]
        public IActionResult GetUsersFoodItems(int id)
        {
            return Ok(_foodItemRepo.GetUsersFoodItems(id));
        }

        // get all food items
        [HttpGet]
        public IActionResult GetAll()
        {
            return Ok(_foodItemRepo.GetAll());
        }


        // get a single food item from the database
        [HttpGet("{id}")]
        public IActionResult GetById(int id)
        {
            return Ok(_foodItemRepo.GetById(id));
        }


        // add a new food item to the database
        [HttpPost]
        public IActionResult Post(FoodItem foodItem)
        {
            if (foodItem.Measurement.Length > 255 || foodItem.Quantity < 0)
            {
                return BadRequest();
            }

            _foodItemRepo.Add(foodItem);
            return Ok();
        }

        
        // update a food item in the database
        [HttpPut("{id}")]
        public IActionResult Put(int id, FoodItem foodItem)
        {
            var originalFoodItem = _foodItemRepo.GetById(id);
            if (id != foodItem.Id || foodItem.UserId != GetCurrentUserProfile().Id || originalFoodItem.UserId != GetCurrentUserProfile().Id)
            {
                return BadRequest();
            }
            originalFoodItem.Quantity = foodItem.Quantity;
            originalFoodItem.SpoonacularIngredientId = foodItem.SpoonacularIngredientId;
            originalFoodItem.Measurement = foodItem.Measurement;
            originalFoodItem.LocationId = foodItem.LocationId;
            _foodItemRepo.Update(originalFoodItem);
            return Ok();
        }


        //delete a food item entry from the database.
        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            var originalFoodItem = _foodItemRepo.GetById(id);
            if (originalFoodItem.UserId != GetCurrentUserProfile().Id)
            {
                return BadRequest();
            }
            _foodItemRepo.Delete(id);
            return Ok();
        }


        // get user profile. 
        private UserProfile GetCurrentUserProfile()
        {
            var firebaseUserId = User.FindFirst(ClaimTypes.NameIdentifier).Value;
            return _userRepo.GetByFirebaseUserId(firebaseUserId);
        }
    }
}
