using Server.DAL.Entities;
using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Server.DAL.Entities
{
    public class ClientProfile
    {
        [Key]
        [ForeignKey("ApplicationUser")]
        public string Id { get; set; }
        public string FirstName { get; set; }
        public string Pseudinym { get; set; }
        public string Email { get; set; }
        public string County { get; set; }
        public string City { get; set; }
        public string[] Languages { get; set; }
        public string Avatar { get; set; }
        public string Role { get; set; }

        public DateTime CreatedAt { get; set; }
        public DateTime UpdatedAt { get; set; }

        public virtual ApplicationUser ApplicationUser { get; set; }
    }
}
