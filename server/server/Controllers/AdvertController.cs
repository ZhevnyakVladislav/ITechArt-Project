using server.Models;
using System.Collections.Generic;
using System.Web.Http;
using Server.BLL.DTO;
using Server.BLL.Interfaces;
using AutoMapper;

namespace Server.Controllers
{
    public class AdvertController : ApiController
    {
        IAdvertService _advertService;
        IUserService _userService;
        IMapper _mapper;
        public AdvertController(IAdvertService advertService, IUserService userService, IMapper mapper)
        {
            _advertService = advertService;
            _userService = userService;
            _mapper = mapper;
        }

        // GET: api/Advert
        public object Get(string type, int? page = 1)
        {
            
            var user = _userService.FindByName(User.Identity.Name);
            int? userId = (user != null) ? user.Id : (int?)null;
            switch (type)
            {
                case "rentOf":
                    {
                        var adverts = MapFewModel(_advertService.GetAdvertsByType(type, (int)page, userId));
                        var count = _advertService.GetCountByType(type, userId);
                        return new { adverts, count };
                    }
                case "rentOut":
                    {
                        var adverts = MapFewModel(_advertService.GetAdvertsByType(type, (int)page, userId));
                        var count = _advertService.GetCountByType(type, userId);
                        return new { adverts, count };
                    }
                case "authorsAdverts": return MapFewModel(_advertService.GetAuthorAdverts(userId));
                case "interestedAdverts": return MapFewModel(_advertService.GetInterestedAdverts(userId));
            }
            return null;
        }

        // GET: api/Advert/5
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/Advert
        [Authorize]
        public void Post([FromBody]AdvertViewModel advert)
        {
            var user = _userService.FindByName(User.Identity.Name);
            var mappedAdvert = MapOneModel(advert);
            mappedAdvert.AuthorId = user.Id;
            mappedAdvert.InterestedUserId = null;
            _advertService.Create(mappedAdvert);
        }
        
        [Authorize]
        // PUT: api/Advert/5
        public void Put(int id, [FromBody]AdvertViewModel advert)
        {
            _advertService.Update(MapOneModel(advert));
        }

        [Authorize]
        // DELETE: api/Advert/5
        public void Delete(int id)
        {
            _advertService.Delete(id);
        }

        
        private AdvertDTO MapOneModel(AdvertViewModel advert)
        {
            return _mapper.Map<AdvertViewModel, AdvertDTO>(advert);
        }

        private IEnumerable<AdvertViewModel> MapFewModel(IEnumerable<AdvertDTO> adverts)
        {
            return _mapper.Map<IEnumerable<AdvertDTO>, IEnumerable<AdvertViewModel>>(adverts);
        }
    }
}
