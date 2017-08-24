using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Server.BLL.Interfaces;
using Server.BLL.DTO;
using Server.DAL.Entities;
using Server.DAL.Interfaces;
using AutoMapper;
using Server.BLL.Infrastructure;
using System.Security.Claims;
using Microsoft.AspNet.Identity;

namespace Server.BLL.Services
{
    public class UserService : IUserService
    {
        IUnitOfWork _database;

        public UserService(IUnitOfWork db)
        {
            _database = db;
        }

        public void Create(UserDTO userDto)
        {
            User user = _database.Users.FindByField(item => item.Email == userDto.Email);
            if (user == null)
            {
                try
                {
                    Mapper.Initialize(cfg => cfg.CreateMap<UserDTO, User>());
                    var clientProfile = Mapper.Map<UserDTO, User>(userDto);
                    clientProfile.UpdatedAt = DateTime.Now;
                    clientProfile.CreatedAt = DateTime.Now;
                    clientProfile.Avatar = "http://res.cloudinary.com/luxorik/image/upload/v1503582141/Unknown_burwjw.png";
                    _database.Users.Create(clientProfile);
                    _database.Save();
                }
                catch
                {
                    throw new Exception("Error");
                }
            }
        }
        public UserDTO FindByName(string name)
        {
            var user = _database.Users.FindByField(item => item.Email == name);
            Mapper.Initialize(cfg => cfg.CreateMap<User, UserDTO>());
            return Mapper.Map<User, UserDTO>(user);
        }
    }
}
