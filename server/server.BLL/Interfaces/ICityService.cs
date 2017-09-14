using System.Collections.Generic;

using Server.BLL.DTO;

namespace Server.BLL.Interfaces
{
    public interface ICityService
    {
        IEnumerable<CityDTO> GetCities(int countryId);
    }
}
