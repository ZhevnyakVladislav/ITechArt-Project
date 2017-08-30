using Server.BLL.DTO;
using System.Collections.Generic;

namespace Server.BLL.Interfaces
{
    public interface IAdvertService
    {
        void Create(AdvertDTO advert);
        void Delete(int id);
        void Update(AdvertDTO advert);
        IEnumerable<AdvertDTO> GetAuthorAdverts(int? userId);
        IEnumerable<AdvertDTO> GetInterestedAdverts(int? userId);
        IEnumerable<AdvertDTO> GetAdvertsByType(int type, int page, int? userId, int? pageSize);
        int GetCountByType(int type, int? userId);
    }
}
