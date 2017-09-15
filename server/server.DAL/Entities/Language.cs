using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using Server.DAL.Entities;

namespace server.DAL.Entities
{
    public class Language
    {
        public Language()
        {
            this.Users = new HashSet<User>();
        }

        [Key]
        public int Id { get; set; }
        public string Name { get; set; }
        public virtual ICollection<User> Users { get; set; }
    }
}
