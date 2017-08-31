using System;
using System.Diagnostics;
using System.IO;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
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
        IImageService _imageService;
        IMapper _mapper;
        public UserController(IUserService userSercice, IMapper mapper, IImageService imageService)
        {
            _userService = userSercice;
            _imageService = imageService;
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
        public async Task<IHttpActionResult> Put(int id)
        {
            if (!Request.Content.IsMimeMultipartContent())
            {
                throw new HttpResponseException(HttpStatusCode.UnsupportedMediaType);
            }
            StreamContent content = (StreamContent) Request.Content;
            var readOnlyStream = await content.ReadAsStreamAsync();
            _imageService.Upload(readOnlyStream);
            return BadRequest();

        }
        private UserViewModel MapOneModel(UserDTO user)
        {
            return _mapper.Map<UserDTO, UserViewModel>(user);
        }
    }
}
