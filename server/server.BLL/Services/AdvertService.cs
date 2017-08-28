using AutoMapper;
using Server.BLL.DTO;
using Server.BLL.Interfaces;
using Server.DAL.Interfaces;
using Server.DAL.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Server.BLL.Services
{
    public class AdvertService : IAdvertService
    {
        IUnitOfWork _database;
        IMapper _mapper;
        public AdvertService(IUnitOfWork db, IMapper mapper)
        {
            _database = db;
            _mapper = mapper;
        }
        public void Create(AdvertDTO model)
        {
            var advert = MapOneModel(model);
            advert.IsActive = true;
            advert.CreatedAt = DateTime.Now;
            advert.UpdatedAt = DateTime.Now;
            _database.Adverts.Create(advert);
            _database.Save();
        }

        public void Update(AdvertDTO model)
        {
            var advert = MapOneModel(model);
            advert.UpdatedAt = DateTime.Now;
            _database.Adverts.Update(advert);
            _database.Save();
        }
        public void Delete(int id)
        {
            _database.Adverts.Delete(id);
            _database.Save();
        }
        public IEnumerable<AdvertDTO> GetAuthorAdverts(int? userId)
        {
            return MapFewModel(_database.Adverts.FindFew(advert => advert.AuthorId == userId));
        }
        public IEnumerable<AdvertDTO> GetInterestedAdverts(int? userId)
        {
            return MapFewModel(_database.Adverts.FindFew(advert => advert.InterestedUserId == userId));
        }
        public IEnumerable<AdvertDTO> GetAdvertsByType(string type, int page, int? userId)
        {
           return MapFewModel(_database.Adverts.GetQuryable().Where(advert => advert.Type == type && advert.AuthorId != userId)
               .OrderBy(advert => advert.Id)
               .Skip((page - 1) * 3)
               .Take(3)
               .ToList());
        }
        public int GetCountByType(string type, int? userId)
        {
            return _database.Adverts.FindFew(advert => advert.Type == type && advert.AuthorId != userId)
                .ToList()
                .Count();
        }
        private Advert MapOneModel(AdvertDTO advert)
        {
            return _mapper.Map<AdvertDTO, Advert>(advert);
        }
        private IEnumerable<AdvertDTO> MapFewModel(IEnumerable<Advert> adverts)
        {
            return _mapper.Map<IEnumerable<Advert>, IEnumerable<AdvertDTO>>(adverts);
        }
    }
}
