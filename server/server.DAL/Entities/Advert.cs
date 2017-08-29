using System;
using System.Collections.Generic;
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
        public AdvertType Type { get; set; }

        public virtual User Author { get; set; }
        public virtual User InterestedUser { get; set; }

        public int AuthorId { get; set; }
        public int? InterestedUserId { get; set; }

        public DateTime CreatedAt { get; set; }
        public DateTime UpdatedAt { get; set; }
    }
}
