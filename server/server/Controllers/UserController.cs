using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using Server.BLL.Services;
using Server.BLL.Interfaces;
using Server.Models;
using AutoMapper;
using Server.BLL.DTO;

namespace Server.Controllers
{
    public class UserController : ApiController
    {
        IUserService _userService;

        public UserController(IUserService userSercice)
        {
            _userService = userSercice;
        }
        [Authorize]
        [HttpGet]
        public string[] GetUser(int? id)
        {
            return new string[] { "hello", "world" };
        }
        public string СreateUser(UserViewModel user)
        {
                Mapper.Initialize(cfg => cfg.CreateMap<UserViewModel, UserDTO>());
                var userDto = Mapper.Map<UserViewModel, UserDTO>(user);
                return "successful";
        }
        //protected override void Dispose(bool disposing)
        //{
        //    userService.Dispose();
        //    base.Dispose(disposing);
        //}
    }
}
