using Server.Models;
using System.Collections.Generic;
using System.Web.Http;
using Server.BLL.DTO;
using Server.BLL.Interfaces;
using AutoMapper;
using System;
using System.Net;
using System.Web;
using server.Models;

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
        public AdvertPaginationModel Get(bool isForUserPage, string type, int? page = 1)
        {
            var user = _userService.FindByName(User.Identity.Name);
            if(isForUserPage)
            {
                if (user != null)
                {
                    var userId = user.Id;
                    return new AdvertPaginationModel(1, GetUserPageAdverts(userId, type));
                }
                else
                {
                    throw new HttpResponseException(HttpStatusCode.Unauthorized);
                }
            }
            else
            {
                var userId = user?.Id;
                var adverts = MapFewModel(_advertService.GetAdvertsByType(int.Parse(type), (int)page, userId, 3));
                var count = _advertService.GetCountByType(int.Parse(type), userId);
                return new AdvertPaginationModel(count, adverts);
            }
        }

        //GET: api/Advert/:id
        [Authorize]
        public AdvertViewModel Get(int id)
        {
            var advert = _advertService.GetAdvertById(id);
            return _mapper.Map<AdvertDTO, AdvertViewModel>(advert);
        }
        // POST: api/Advert
        [Authorize]
        public void Post([FromBody]AdvertViewModel advert)
        {
            var user = _userService.FindByName(User.Identity.Name);
            var mappedAdvert = MapOneModel(advert);
            mappedAdvert.AuthorId = user.Id;
            mappedAdvert.InterestedUserId = null;
            mappedAdvert.Address = new AddressDTO()
            {
                City = advert.Address.City,
                Country = advert.Address.Country,
                Street = advert.Address.Street,
                Coordinate = _mapper.Map<CoordinateViewModel, CoordinateDTO>(advert.Address.Coordinate)
            };
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

        [Authorize]
        private IEnumerable<AdvertViewModel> GetUserPageAdverts(int? userId, string type)
        {
            switch (type)
            {
                case "authorAdverts":
                    return MapFewModel(_advertService.GetAuthorAdverts(userId));
                case "interestedAdverts":
                    return MapFewModel(_advertService.GetInterestedAdverts(userId));
                default: return null;
            }
        }
    }
}
