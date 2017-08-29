using AutoMapper;
using Server.BLL.DTO;
using Server.BLL.Interfaces;
using Server.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
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
        [Authorize]
        // GET: api/User
        public UserViewModel Get()
        {
            return MapOneModel(_userService.FindByName(User.Identity.Name));
        }

        // GET: api/User/5
        public string Get(int id)
        {
            return "none";
        }

        // POST: api/User
        public void Post([FromBody]string value)
        {
        }

        // PUT: api/User/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/User/5
        public void Delete(int id)
        {
        }
        private UserViewModel MapOneModel(UserDTO user)
        {
            Mapper.Initialize(cfg => cfg.CreateMap<UserDTO, UserViewModel>());
            return Mapper.Map<UserDTO, UserViewModel>(user);
        }
    }
}
