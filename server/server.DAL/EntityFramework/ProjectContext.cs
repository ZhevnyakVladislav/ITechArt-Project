using server.DAL.Entities;

namespace Server.DAL.EntityFramework
{
    using Entities;
    using System.Collections.Generic;
    using System.Data.Entity;

    public class ProjectContext : DbContext
    {
        public ProjectContext(string connectionString) : base(connectionString)
        {
            Database.SetInitializer(new PjojectDbInitializer());
        }
       
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

            modelBuilder.Entity<User>()
                .HasRequired(c => c.Address)
                .WithMany()
                .WillCascadeOnDelete(false);
            
            modelBuilder.Entity<Message>()
                .HasRequired(c => c.Author)
                .WithMany()
                .WillCascadeOnDelete(false);

        }
        public class PjojectDbInitializer: DropCreateDatabaseAlways<ProjectContext>
        {
            protected override void Seed(ProjectContext context)
            {
                IList<Country> countries = new List<Country>();
                context.Countries.Add(new Country() {Name = "Belarus"});
                context.Countries.Add(new Country() { Name = "Russia" });
                context.Countries.Add(new Country() { Name = "England" });
                base.Seed(context);
            }
        }
    }
}