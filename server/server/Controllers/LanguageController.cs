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
    public class LanguageController : ApiController
    {
        ILanguageService _languageService;
        IMapper _mapper;
        public LanguageController(ILanguageService languageService, IMapper mapper)
        {
            _languageService = languageService;
            _mapper = mapper;
        }

        // GET: api/Language
        public IEnumerable<LanguageViewModel> Get()
        {
            return _mapper.Map<IEnumerable<LanguageDTO>, IEnumerable<LanguageViewModel>>(
                _languageService.GetAllLanguages());
        }
    }
}
