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
            Database.SetInitializer(new ProjectDbInitializer());
        }
       
        public DbSet<User> Users { get; set;}
        public DbSet<Advert> Adverts { get; set; }
        public DbSet<Message> Messages { get; set; }
        public DbSet<Address> Addresses { get; set; }
        public DbSet<Country> Countries { get; set; }
        public DbSet<City> Cities { get; set; }
        public DbSet<Language> Languages { get; set; }

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

            modelBuilder.Entity<User>()
                .HasMany(x => x.Languages)
                .WithMany(x => x.Users)
                .Map(x =>
                {
                    x.ToTable("UsersLanguages");
                    x.MapLeftKey("UserId");
                    x.MapRightKey("LanguageId");
                });

        }
        public class ProjectDbInitializer: CreateDatabaseIfNotExists<ProjectContext>
        {
            protected override void Seed(ProjectContext context)
            {
                IList<Country> countries = new List<Country>();
                context.Countries.Add(new Country() {Name = "Belarus"});
                context.Countries.Add(new Country() { Name = "Russia" });
                context.Countries.Add(new Country() { Name = "England" });
                context.Cities.Add(new City() {Name = "Minsk", CountryId = 1});
                context.Cities.Add(new City() { Name = "Vitebsk", CountryId = 1 });
                context.Cities.Add(new City() { Name = "Grodno", CountryId = 1 });
                context.Cities.Add(new City() { Name = "Moscow", CountryId = 2 });
                context.Cities.Add(new City() { Name = "Smolensk", CountryId = 2 });
                context.Languages.Add(new Language() {Name = "Russian"});
                context.Languages.Add(new Language() { Name = "Belorusian" });
                context.Languages.Add(new Language() { Name = "English" });
                base.Seed(context);
            }
        }
    }
}