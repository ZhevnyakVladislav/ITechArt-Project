using System;
using System.Collections.Generic;
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
            var user = _userService.FindByName(User.Identity.Name);
            if (user.Id != id) throw new HttpResponseException(new HttpResponseMessage(HttpStatusCode.Unauthorized)
            {
                Content = new StringContent("Not authorized")
            });
            if (!Request.Content.IsMimeMultipartContent())
            {
                throw new HttpResponseException(HttpStatusCode.UnsupportedMediaType);
            }
            var file = LoadImage(HttpContext.Current.Request);
            try
            {
                var status = _imageService.Upload(file);
                user.Avatar = status;
                _userService.UpdateUserAvatar(user.Id, status);
                return Ok();
            }
            catch
            {
                throw new HttpResponseException(new HttpResponseMessage(HttpStatusCode.BadRequest)
                {
                    Content = new StringContent("Cloud server error")
                });
            }
            
        }
        private UserViewModel MapOneModel(UserDTO user)
        {
            return _mapper.Map<UserDTO, UserViewModel>(user);
        }

        private Stream LoadImage(HttpRequest httpRequest)
        {
            if (httpRequest.Files.Count == 1)
            {
                return httpRequest.Files[0].InputStream;
            }
            throw new Exception();
        }
    }
}
