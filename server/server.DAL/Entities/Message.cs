using System;
using System.ComponentModel.DataAnnotations;

namespace Server.DAL.Entities
{
    public class Message
    {
        [Key]
        public int Id { get; set; }
        public string Description { get; set; }
        public virtual User Author { get; set; }
        public virtual Advert Advert { get; set; }
        public int AuthorId { get; set; }
        public int AdvertId { get; set; }

        public DateTime CreatedAt { get; set; }
    }
}
