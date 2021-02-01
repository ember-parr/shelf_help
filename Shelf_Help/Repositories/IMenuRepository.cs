using Shelf_Help.Models;
using System.Collections.Generic;

namespace Shelf_Help.Repositories
{
    public interface IMenuRepository
    {
        void Add(Menu menu);
        void Delete(int id);
        Menu GetById(int id);
        void Update(Menu menu);

        List<Menu> GetAll();

    }
}