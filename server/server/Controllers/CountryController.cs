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
    public class CountryController : ApiController
    {
        ICountryService _countryService;
        IMapper _mapper;
        public CountryController(ICountryService countryService, IMapper mapper)
        {
            _countryService = countryService;
            _mapper = mapper;
        }
        // GET: api/Country
        public IEnumerable<CountryViewModel> Get()
        {
            return _mapper.Map<IEnumerable<CountryDTO>, IEnumerable<CountryViewModel>>(
                _countryService.GetAllCountries());
        }

    }
}
