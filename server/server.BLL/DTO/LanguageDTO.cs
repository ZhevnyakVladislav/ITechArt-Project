using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Server.BLL.DTO
{
    public class LanguageDTO
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public virtual ICollection<UserDTO> Users { get; set; }

    }
}
