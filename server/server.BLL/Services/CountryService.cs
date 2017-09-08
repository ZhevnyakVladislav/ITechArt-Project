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
    public class CountryService : ICountryService
    {
        IUnitOfWork _unitOfWork;
        IMapper _mapper;
        public CountryService(IUnitOfWork db, IMapper mapper)
        {
            _unitOfWork = db;
            _mapper = mapper;
        }
        public IEnumerable<CountryDTO> GetAllCountries()
        {
            return _mapper.Map<IEnumerable<Country>, IEnumerable<CountryDTO>>(_unitOfWork.Countries.GetAll());
        }
    }
}
