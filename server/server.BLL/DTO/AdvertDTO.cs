using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Server.BLL.DTO
{
    public class AdvertDTO
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public bool IsActive { get; set; }
        public AdvertTypeDTO Type { get; set; }

        public virtual UserDTO Author { get; set; }
        public virtual UserDTO InterestedUser { get; set; }

        public int AuthorId { get; set; }
        public int? InterestedUserId { get; set; }

        public DateTime CreatedAt { get; set; }
        public DateTime UpdatedAt { get; set; }

    }
}
