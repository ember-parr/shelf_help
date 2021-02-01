using Shelf_Help.Models;
using System.Collections.Generic;

namespace Shelf_Help.Repositories
{
    public interface IMealTypeRepository
    {
        List<MealType> GetAll();
        MealType GetById(int id);
    }
}