using System.ComponentModel.DataAnnotations;

namespace server.DAL.Entities
{
    public class Address
    {
        [Key]
        public int Id { get; set; }
        public virtual City City { get; set; }
        public int CityId { get; set; }
        public string Street { get; set; }
    }
}
