using System;

namespace Server.BLL.DTO
{
    public class UserDTO
    {
        public int Id { get; set; }
        public string UserName { get; set; }
        public string Pseudinym { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public string County { get; set; }
        public string City { get; set; }
        public string[] Languages { get; set; }
        public string Avatar { get; set; }

        public DateTime CreatedAt { get; set; }
        public DateTime UpdatedAt { get; set; }
    }
}
