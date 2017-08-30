using System;

namespace Server.Models
{
    public class MessageViewModel
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public virtual UserViewModel Author { get; set; }
        public virtual AdvertViewModel Advert { get; set; }
        public int AuthorId { get; set; }
        public int AdvertId { get; set; }

        public DateTime CreatedAt { get; set; }
    }
}