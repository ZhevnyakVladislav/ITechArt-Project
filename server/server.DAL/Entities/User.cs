using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using server.DAL.Entities;

namespace Server.DAL.Entities
{
    public class User
    {
        public User()
        {
            this.Languages = new HashSet<Language>();
        }
        [Key]
        public int Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string UserName { get; set; }
        public string Pseudonym { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public int AddressId { get; set; }
        public virtual Address Address { get; set; }
        public virtual ICollection<Language> Languages { get; set; }
        public string Avatar { get; set; }

        public DateTime CreatedAt { get; set; }
        public DateTime UpdatedAt { get; set; }

    }
}
