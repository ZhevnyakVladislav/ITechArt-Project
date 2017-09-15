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
    public class LanguageService : ILanguageService
    {
        IUnitOfWork _unitOfWork;
        IMapper _mapper;
        public LanguageService(IUnitOfWork db, IMapper mapper)
        {
            _unitOfWork = db;
            _mapper = mapper;
        }
        public IEnumerable<LanguageDTO> GetAllLanguages()
        {
            return _mapper.Map<IEnumerable<Language>, IEnumerable<LanguageDTO>>(_unitOfWork.Languages.GetAll());
        }
    }
}
