using System;
using System.ComponentModel.DataAnnotations;

namespace Server.DAL.Entities
{
    public class Advert
    {
        [Key]
        public int Id { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public bool IsActive { get; set; }
        public string Type { get; set; }
        public User Author { get; set; }
        public User InterestedUser { get; set; }


        public DateTime CreatedAt { get; set; }
        public DateTime UpdatedAt { get; set; }
    }
}
