using server.DAL.Entities;

namespace Server.DAL.EntityFramework
{
    using Entities;
    using System.Data.Entity;

    public class ProjectContext : DbContext
    {
        public ProjectContext(string connectionString) : base(connectionString) { }
       
        public DbSet<User> Users { get; set;}
        public DbSet<Advert> Adverts { get; set; }
        public DbSet<Message> Messages { get; set; }
        public DbSet<Address> Addresses { get; set; }
        public DbSet<Country> Countries { get; set; }
        public DbSet<City> Cities { get; set; }


        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Advert>()
                .HasRequired(c => c.Author)
                .WithMany()
                .WillCascadeOnDelete(false);

            modelBuilder.Entity<Message>()
               .HasRequired(c => c.Author)
               .WithMany()
               .WillCascadeOnDelete(false);
        }
    }
}