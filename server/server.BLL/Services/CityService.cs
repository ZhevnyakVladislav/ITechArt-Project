using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using AutoMapper;
using server.DAL.Entities;
using Server.BLL.DTO;
using Server.BLL.Interfaces;
using Server.DAL.Interfaces;

namespace Server.BLL.Services
{
    public class CityService : ICityService
    {
        IUnitOfWork _unitOfWork;
        IMapper _mapper;
        public CityService(IUnitOfWork db, IMapper mapper)
        {
            _unitOfWork = db;
            _mapper = mapper;
        }
        public IEnumerable<CityDTO> GetCities(int countryId)
        {
            return _mapper.Map<IEnumerable<City>, IEnumerable<CityDTO>>(_unitOfWork.Cities.FindFew(city => city.CountryId == countryId));
        }
    }
}
