// Use Server.DAL.EntityFramework, and folder name as well
namespace Server.DAL.Entity_Framework
{
    using Entities;
    using System.Data.Entity;
    using System;

    public class ProjectContext : DbContext
    {
        public ProjectContext(string connectionString) : base(connectionString) { }
       
        public DbSet<User> Users { get; set;}
        public DbSet<Advert> Adverts { get; set; }
        public DbSet<Message> Messages { get; set; }

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