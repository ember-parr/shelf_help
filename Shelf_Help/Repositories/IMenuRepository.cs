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
        Menu GetById(int id, int userId);
        
        void Update(Menu menu);

        List<Menu> GetAll(int id);

        Menu GetBySingleDate(DateTime date, int typeId, int userId);

        List<Menu> GetByDateRange(DateTime startDate, DateTime endDate, int userId);

    }
}