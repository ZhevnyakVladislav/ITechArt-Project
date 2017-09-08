using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Server.BLL.DTO;

namespace Server.BLL.Interfaces
{
    public interface ICountryService
    {
        IEnumerable<CountryDTO> GetAllCountries();
    }
}
