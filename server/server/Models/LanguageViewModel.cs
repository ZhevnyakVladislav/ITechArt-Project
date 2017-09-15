using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Server.Models;

namespace server.Models
{
    public class LanguageViewModel
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public  virtual  ICollection<UserViewModel> Users { get; set; }
    }
}