using AutoMapper;
using Server.BLL.DTO;
using Server.BLL.Interfaces;
using Server.DAL.Interfaces;
using Server.DAL.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using Infrastructure.Interfaces;
using server.DAL.Entities;

namespace Server.BLL.Services
{
    public class AdvertService : IAdvertService
    {
        IUnitOfWork _unitOfWork;
        IMapper _mapper;
        IAdvertCache<AdvertDTO> _cache;
        public AdvertService(IUnitOfWork db, IMapper mapper, IAdvertCache<AdvertDTO> cache)
        {
            _unitOfWork = db;
            _mapper = mapper;
            _cache = cache;
        }
        public void Create(AdvertDTO model)
        {
            var advert = MapOneModel(model);
            advert.IsActive = true;
            advert.CreatedAt = DateTime.Now;
            advert.UpdatedAt = DateTime.Now;
            _unitOfWork.Adverts.Create(advert);
            _unitOfWork.Save();
        }

        public void Update(AdvertDTO model)
        {
            var advert = MapOneModel(model);
            advert.UpdatedAt = DateTime.Now;
            _unitOfWork.Adverts.Update(advert);
            _unitOfWork.Save();
        }
        public void Delete(int id)
        {
            _unitOfWork.Adverts.Delete(id);
            _unitOfWork.Save();
            _cache.ResetCache();
        }
        public IEnumerable<AdvertDTO> GetAuthorAdverts(int? userId)
        {
            var result = _cache.GetAuthorAdverts("authorId=" + userId);
            if (result == null)
            {
                result = MapFewModel(_unitOfWork.Adverts.FindFew(advert => advert.AuthorId == userId));
                _cache.AddAuthorAdverts("authorId=" + userId, result);
            }
            return result;
        }
        public IEnumerable<AdvertDTO> GetInterestedAdverts(int? userId)
        {
            var result = _cache.GetInterestedAdverts("iterestedUserId=" + userId);
            if (result == null)
            {
                result =  MapFewModel(_unitOfWork.Adverts.FindFew(advert => advert.InterestedUserId == userId));
                _cache.AddInterestedAdverts("iterestedUserId=" + userId, result);
            }
            return result;
        }
        public IEnumerable<AdvertDTO> GetAdvertsByType(int type, int page, int? userId, int? pageSize = 3)
        {
            var result = _cache.GetAdvertsByType((type + page).ToString());
            if (result == null)
            {
                result =  MapFewModel(_unitOfWork.Adverts.GetQuryable().Where(advert => (int)advert.Type == type && advert.AuthorId != userId && advert.IsActive)
                    .OrderBy(advert => advert.Id)
                    .Skip((page - 1) * (int)pageSize)
                    .Take((int)pageSize)
                    .ToList());
                _cache.AddTypedAdverts((type + page).ToString(), result);
            }
            return result;
        }
        public int GetCountByType(int type, int? userId)
        {
            return _unitOfWork.Adverts.FindFew(advert => (int)advert.Type == type && advert.AuthorId != userId && advert.IsActive)
                .ToList()
                .Count();
        }

        public AdvertDTO GetAdvertById(int id)
        {
            var advert = _unitOfWork.Adverts.Get(id);
            return _mapper.Map<Advert, AdvertDTO>(advert);
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
