using Shelf_Help.Models;

namespace Shelf_Help.Repositories
{
    public interface IUserProfileRepository
    {
        void Add(UserProfile userProfile);
        UserProfile GetByFirebaseUserId(string firebaseUserId);

        UserProfile GetById(int id);
    }
}