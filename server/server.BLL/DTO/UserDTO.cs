using System;
using System.Collections.Generic;

namespace Server.BLL.DTO
{
    public class UserDTO
    {
        public int Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string UserName { get; set; }
        public string Pseudonym { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public int AddressId { get; set; }
        public virtual AddressDTO Address { get; set; }
        public virtual ICollection<LanguageDTO> Languages { get; set; }
        public string Avatar { get; set; }

        public DateTime CreatedAt { get; set; }
        public DateTime UpdatedAt { get; set; }
    }
}
