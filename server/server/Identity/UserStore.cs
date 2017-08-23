using AutoMapper;
using Microsoft.AspNet.Identity;
using Server.BLL.DTO;
using Server.BLL.Interfaces;
using Server.BLL.Services;
using Server.Models;
using System;
using System.Threading.Tasks;

namespace server.Identity
{
    public class UserStore : IUserStore<UserViewModel, int>
    {
        IUserService _userService;
        public UserStore(IUserService userService)
        {
            _userService = userService;
        }
        public Task CreateAsync(UserViewModel user)
        {
            Mapper.Initialize(cfg => cfg.CreateMap<UserViewModel, UserDTO>());
            return Task.Factory.StartNew(() => _userService.Create(Mapper.Map<UserViewModel, UserDTO>(user)));
        }   

        public Task DeleteAsync(UserViewModel user)
        {
            //Delete User 
            throw new NotImplementedException();
        }
        public Task UpdateAsync(UserViewModel user)
        {
            throw new NotImplementedException();
        }

        public Task<UserViewModel> FindByIdAsync(int userId)
        {
            throw new NotImplementedException();
        }
        public Task<UserViewModel> FindByNameAsync(string email)
        {
            var user = _userService.FindByEmail(email);
            Mapper.Initialize(cfg => cfg.CreateMap<UserDTO, UserViewModel>());
            return Task.FromResult<UserViewModel>(Mapper.Map<UserDTO, UserViewModel>(user));
        }
        public void Dispose()
        {
        }

    }
}