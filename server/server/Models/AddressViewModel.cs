using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace server.Models
{
    public class AddressViewModel
    {
        public int Id { get; set; }
        public string Street { get; set; }
        public virtual CityViewModel City { get; set; }
        public int CityId { get; set; }
    }
}