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
        IUnitOfWork Database { get; set; }

        public UserService(IUnitOfWork db)
        {
            Database = db;
        }

        public void Create(UserDTO userDto)
        {
            User user = Database.Users.Find(item => item.Email == userDto.Email);
            if (user == null)
            {
                try
                {
                    Mapper.Initialize(cfg => cfg.CreateMap<UserDTO, User>());
                    var clientProfile = Mapper.Map<UserDTO, User>(userDto);
                    clientProfile.UpdatedAt = DateTime.Now;
                    clientProfile.CreatedAt = DateTime.Now;
                    Database.Users.Create(clientProfile);
                    Database.SaveAsync();
                }
                catch
                {
                    throw new Exception("Error");
                }
            }
        }
        public UserDTO FindByName(string email)
        {
            var user = Database.Users.Find(item => item.Email == email);
            Mapper.Initialize(cfg => cfg.CreateMap<User, UserDTO>());
            return Mapper.Map<User, UserDTO>(user);
        }
        public Task<ClaimsIdentity> Authenticate(UserDTO userDto)
        {
            ClaimsIdentity claim = null;
            User user = Database.Users.Find(item => item.Email == userDto.Email);
            if (user != null)
            {
                var claims = new List<Claim>();
                claims.Add(new Claim(ClaimTypes.Email, user.Email));
                claim = new ClaimsIdentity(claims, DefaultAuthenticationTypes.ApplicationCookie);
            }
            return Task.FromResult(claim);
        }
        
        public void Dispose()
        {
            Database.Dispose();
        }
    }
}
