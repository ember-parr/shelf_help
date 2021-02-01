using Shelf_Help.Models;
using System.Collections.Generic;

namespace Shelf_Help.Repositories
{
    public interface ILocationRepository
    {
        List<Location> GetAll();
        Location GetById(int id);
    }
}