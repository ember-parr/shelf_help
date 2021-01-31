using Shelf_Help.Models;
using Shelf_Help.Models.ViewModels;
using System.Collections.Generic;

namespace Shelf_Help.Repositories
{
    public interface IMenuRepository
    {
        void Add(Menu menu);
        void Delete(int id);
        Menu GetById(int id);
        List<MenuSummary> GetUsersMenu(int userId);
        void Update(Menu menu);

        List<IngredientsList> GetIngredients(int menuId);
    }
}