using Server.DAL.Entities;

namespace server.DAL.Entity_Framework
{
    using Server.DAL.Entities;
    using System;
    using System.Data.Entity;
    using System.Linq;

    public class ProjectContext : DbContext
    {
        // Your context has been configured to use a 'ProjectContext' connection string from your application's 
        // configuration file (App.config or Web.config). By default, this connection string targets the 
        // 'server.DAL.Entity_Framework.ProjectContext' database on your LocalDb instance. 
        // 
        // If you wish to target a different database and/or database provider, modify the 'ProjectContext' 
        // connection string in the application configuration file.
        public ProjectContext(string connectionString)
            : base(connectionString)
        {
        }

        // Add a DbSet for each entity type that you want to include in your model. For more information 
        // on configuring and using a Code First model, see http://go.microsoft.com/fwlink/?LinkId=390109.

        // public virtual DbSet<MyEntity> MyEntities { get; set; }
        public virtual DbSet<User> Users{ get; set;}
        public virtual DbSet<Advert> Adverts{ get; set;}
        public virtual DbSet<Message> Messages { get; set;}

    }

}