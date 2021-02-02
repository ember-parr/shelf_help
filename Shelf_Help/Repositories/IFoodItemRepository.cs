﻿using Shelf_Help.Models;
using System.Collections.Generic;

namespace Shelf_Help.Repositories
{
    public interface IFoodItemRepository
    {
        void Add(FoodItem foodItem);
        FoodItem GetById(int id);
        List<FoodItem> GetAll(int userId);
        void Update(FoodItem foodItem);
        void Delete(int id);
    }
}