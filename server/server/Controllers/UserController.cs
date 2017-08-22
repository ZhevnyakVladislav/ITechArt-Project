using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using Server.BLL.Services;
using Server.BLL.Interfaces;
using Server.Models;
using AutoMapper;
using Server.BLL.DTO;
using System.Web.Http;

namespace Server.Controllers
{
    public class UserController : ApiController
    {
        IUserService _userService;

        public UserController(IUserService userSercice)
        {
            _userService = userSercice;
        }

        [HttpGet]
        [Authorize]
        public string[] GetUser()
        {
            return new string[] { "hello", "world" };
        }


        [HttpPost]
        public string CreateUser(UserViewModel user)
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
