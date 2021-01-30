using Shelf_Help.Models;
using Shelf_Help.Models.ViewModels;
using System.Collections.Generic;

namespace Shelf_Help.Repositories
{
    public interface IMealTypeRepository
    {
        List<MealOption> GetAll();
        MealType GetById(int id);
    }
}