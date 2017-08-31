using Server.BLL.DTO;

namespace Server.BLL.Interfaces
{
    public interface IUserService
    {
        void Create(UserDTO userDto);
        UserDTO FindByName(string name);
        void UpdateUserAvatar(int userId, string url);

    }
}
