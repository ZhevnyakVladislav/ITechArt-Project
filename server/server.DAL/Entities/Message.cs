using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Data.Entity;

namespace Server.DAL.Entities
{
    public class Message
    {
        public int Id { get; set; }
        public string Description { get; set; }
        public User Author { get; set; }
        public Advert Advert { get; set; }

        public DateTime CreatedAt { get; set; }
        public DateTime UpdatedAt { get; set; }
    }
}
