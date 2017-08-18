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

namespace Server.BLL.Services
{
    public class UserService : IUserService
    {
        IUnitOfWork Database { get; set; }

        public UserService(IUnitOfWork db)
        {
            Database = db;
        }

        public UserDTO GetUser(int? id)
        {
            if (id == null)
                throw new Exception("");
            var phone = Database.Users.Get(id.Value);
            if (phone == null)
                throw new Exception("");
            Mapper.Initialize(cfg => cfg.CreateMap<User, UserDTO>());
            return Mapper.Map<User, UserDTO>(phone);
        }
        public void СreateUser(UserDTO userDto)
        {
            var date = DateTime.Now;
            User user = new User()
            {
                FirstName = userDto.FirstName,
                CreatedAt = DateTime.Now,
                UpdatedAt = DateTime.Now
            };
            Database.Users.Create(user);
            Database.Save();

        }
        public void Dispose()
        {
            Database.Dispose();
        }
    }
}
