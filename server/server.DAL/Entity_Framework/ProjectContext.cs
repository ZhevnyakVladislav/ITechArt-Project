namespace Server.DAL.Entity_Framework
{
    using Entities;
    using System.Data.Entity;

    public class ProjectContext :DbContext
    {
        public ProjectContext(string connectionString) : base(connectionString) { }

        public DbSet<User> ClientProfiles { get; set;}
        public DbSet<Advert> Adverts { get; set; }
        public DbSet<Message> Messages { get; set; }
    }
}