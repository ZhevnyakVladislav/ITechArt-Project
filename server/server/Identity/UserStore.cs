using AutoMapper;
using Microsoft.AspNet.Identity;
using Server.BLL.DTO;
using Server.BLL.Interfaces;
using Server.BLL.Services;
using Server.Models;
using System;
using System.Threading.Tasks;

namespace Server.Identity
{
    public class UserStore : IUserStore<UserViewModel, int>
    {
        IUserService _userService;
        IMapper _mapper;
        public UserStore(IUserService userService, IMapper mapper)
        {
            _userService = userService;
            _mapper = mapper;
        }
        public Task CreateAsync(UserViewModel user)
        {
            return Task.Factory.StartNew(() => _userService.Create(_mapper.Map<UserViewModel, UserDTO>(user)));
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
            var user = _userService.FindByName(email);
            return Task.FromResult<UserViewModel>(_mapper.Map<UserDTO, UserViewModel>(user));
        }
        public void Dispose()
        {
        }

    }
}