using System;
using Server.BLL.Interfaces;
using Server.BLL.DTO;
using Server.DAL.Entities;
using Server.DAL.Interfaces;
using AutoMapper;

namespace Server.BLL.Services
{
    public class UserService : IUserService
    {
        IUnitOfWork _unitOfWork;
        IMapper _mapper;
        public UserService(IUnitOfWork db, IMapper mapper)
        {
            _unitOfWork = db;
            _mapper = mapper;
        }

        public void Create(UserDTO userDto)
        {
            var user = _unitOfWork.Users.FindByField(item => item.Email == userDto.Email);
            if (user != null) return;
            var clientProfile = _mapper.Map<UserDTO, User>(userDto);
            clientProfile.UpdatedAt = DateTime.Now;
            clientProfile.CreatedAt = DateTime.Now;
            clientProfile.Avatar = "http://res.cloudinary.com/luxorik/image/upload/v1503582141/Unknown_burwjw.png";
            _unitOfWork.Users.Create(clientProfile);
            _unitOfWork.Save();
        }
        public UserDTO FindByName(string name)
        {
            var user = _unitOfWork.Users.FindByField(item => item.Email == name);
            return _mapper.Map<User, UserDTO>(user);
        }
        public void UpdateUserAvatar(int userId, string url)
        {
            var user = _unitOfWork.Users.Get(userId);
            user.UpdatedAt = DateTime.Now;
            user.Avatar = url;
            _unitOfWork.Users.Update(user);
            _unitOfWork.Save();
        }

    }
}
