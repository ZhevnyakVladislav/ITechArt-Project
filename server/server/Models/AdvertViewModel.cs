using System;

namespace Server.Models
{
    public class AdvertViewModel
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public bool IsActive { get; set; }
        public AdvertTypeView Type { get; set; }
        public virtual UserViewModel Author { get; set; }
        public virtual UserViewModel InterestedUser { get; set; }

        public int AuthorId { get; set; }
        public int? InterestedUserId { get; set; }

        public DateTime CreatedAt { get; set; }
        public DateTime UpdatedAt { get; set; }
    }
}


