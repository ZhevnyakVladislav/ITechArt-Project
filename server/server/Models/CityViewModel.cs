using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace server.Models
{
    public class CityViewModel
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public virtual CountryViewModel Country { get; set; }
        public int CountryId { get; set; }

    }
}