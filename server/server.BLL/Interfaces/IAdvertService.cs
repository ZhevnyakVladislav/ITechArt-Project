using Server.BLL.DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Server.BLL.Interfaces
{
    public interface IAdvertService
    {
        void Create(AdvertDTO advert);
        void Delete(int id);
        void Update(AdvertDTO advert);
        IEnumerable<AdvertDTO> GetAuthorAdverts(int? userId);
        IEnumerable<AdvertDTO> GetInterestedAdverts(int? userId);
        IEnumerable<AdvertDTO> GetAdvertsByType(string type, int page, int? userId);
        int GetCountByType(string type, int? userId);
    }
}
