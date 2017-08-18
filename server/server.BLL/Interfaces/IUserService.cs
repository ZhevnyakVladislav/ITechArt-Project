using Server.BLL.DTO;
using Server.DAL.Entities;

namespace Server.BLL.Interfaces
{
    public interface IUserService
    {
        UserDTO GetUser(int? id);

        void СreateUser(UserDTO user);
        void Dispose();
    }
}
