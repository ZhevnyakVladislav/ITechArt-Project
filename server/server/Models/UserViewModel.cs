using Microsoft.AspNet.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Server.Models
{
    public class UserViewModel : IUser<int>
    {
        public int Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string UserName { get; set; }
        public string Pseudonym { get; set; }
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