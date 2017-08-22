using System;
using System.ComponentModel.DataAnnotations;

namespace Server.DAL.Entities
{
    public class Message
    {
        [Key]
        public int Id { get; set; }
        public string Description { get; set; }
        public User Author { get; set; }
        public Advert Advert { get; set; }

        public DateTime CreatedAt { get; set; }
        public DateTime UpdatedAt { get; set; }
    }
}
