using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Server.BLL.DTO
{
    public class MessageDTO
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public virtual UserDTO Author { get; set; }
        public virtual AdvertDTO Advert { get; set; }
        public int AuthorId { get; set; }
        public int AdvertId { get; set; }

        public DateTime CreatedAt { get; set; }

    }
}
