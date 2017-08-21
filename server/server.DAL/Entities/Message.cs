using System;


namespace Server.DAL.Entities
{
    public class Message
    {
            
        public int Id { get; set; }
        public string Description { get; set; }
        public ClientProfile Author { get; set; }
        public Advert Advert { get; set; }

        public DateTime CreatedAt { get; set; }
        public DateTime UpdatedAt { get; set; }
    }
}
