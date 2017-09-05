using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Server.Models;

namespace server.Models
{
    public class AdvertPaginationModel
    {
        public int Count { get; set; }
        public IEnumerable<AdvertViewModel> Adverts { get; set; }

        public AdvertPaginationModel(int count, IEnumerable<AdvertViewModel> adverts)
        {
            this.Count = count;
            this.Adverts = adverts;
        }
    }
}