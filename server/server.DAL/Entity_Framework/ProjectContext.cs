namespace Server.DAL.Entity_Framework
{
    using Entities;
    using Microsoft.AspNet.Identity.EntityFramework;
    using System.Data.Entity;

    public class ProjectContext : IdentityDbContext<ApplicationUser>
    {
        public ProjectContext(string connectionString) : base(connectionString) { }

        public DbSet<ClientProfile> ClientProfiles { get; set;}
        public DbSet<Advert> Adverts { get; set; }
        public DbSet<Message> Messages { get; set; }
    }
}