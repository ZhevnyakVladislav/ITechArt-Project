using AutoMapper;
using Server.BLL.DTO;
using Server.BLL.Interfaces;
using Server.Models;
using System.Web;
using System.Web.Http;

namespace Server.Controllers
{
    public class UserController : ApiController
    {
        IUserService _userService;
        IMapper _mapper;
        public UserController(IUserService userSercice, IMapper mapper)
        {
            _userService = userSercice;
            _mapper = mapper;
        }

        [Authorize]
        // GET: api/User
        public UserViewModel Get()
        {
            return MapOneModel(_userService.FindByName(User.Identity.Name));
        }

        [Authorize]
        // PUT: api/User/5
        public IHttpActionResult Put(int id, [FromBody]HttpPostedFileBase model)
        {
            var user = _userService.FindByName(User.Identity.Name);
            if (user.Id != id) return BadRequest("Are you hacker?");
            _userService.Update(user);
            return Ok();
        }
        private UserViewModel MapOneModel(UserDTO user)
        {
            return _mapper.Map<UserDTO, UserViewModel>(user);
        }
    }
}
