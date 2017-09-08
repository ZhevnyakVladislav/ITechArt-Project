using System.ComponentModel.DataAnnotations;

namespace server.DAL.Entities
{
    public class City
    {
        [Key]
        public int Id { get; set; }
        public string Name { get; set; }
        public virtual Country Country { get; set; }
        public int CountryId { get; set; }
    }
}
