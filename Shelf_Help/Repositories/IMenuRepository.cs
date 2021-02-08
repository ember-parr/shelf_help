using Shelf_Help.Models;
using Shelf_Help.Models.ViewModels;
using System;
using System.Collections.Generic;

namespace Shelf_Help.Repositories
{
    public interface IMenuRepository
    {
        void Add(Menu menu);
        void Delete(int id);
        Menu GetById(int id);
        
        void Update(Menu menu);

        List<Menu> GetAll(int id);

        List<Menu> GetBySingleDate(DateTime date);



    }
}