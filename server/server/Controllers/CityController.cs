using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using AutoMapper;
using server.Models;
using Server.BLL.DTO;
using Server.BLL.Interfaces;

namespace server.Controllers
{
    public class CityController : ApiController
    {
        ICityService _cityService;
        IMapper _mapper;
        public CityController(ICityService cityService, IMapper mapper)
        {
            _cityService = cityService;
            _mapper = mapper;
        }
        // GET: api/City
        public IEnumerable<CityViewModel> Get(int countryId)
        {
            return _mapper.Map<IEnumerable<CityDTO>, IEnumerable<CityViewModel>>(_cityService.GetCities(countryId));
        }

    }
}
