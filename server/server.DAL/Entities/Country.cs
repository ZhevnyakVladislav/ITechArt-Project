

using System.ComponentModel.DataAnnotations;

namespace server.DAL.Entities
{
    public class Country
    {
        [Key]
        public int Id { get; set; }
        public string Name { get; set; }

    }
}
