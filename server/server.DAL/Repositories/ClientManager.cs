using Server.DAL.Entity_Framework;
using Server.DAL.Interfaces;
using Server.DAL.Entities;

namespace Server.DAL.Repositories
{
    class ClientManager : IClientManager
    {
        private ProjectContext db;
        public ClientManager(ProjectContext context)
        {
            this.db = context;
        }
        public void Create(ClientProfile ClientProfile)
        {
            db.ClientProfiles.Add(ClientProfile);
            db.SaveChanges();
        }
        public void Dispose()
        {
            db.Dispose();
        }
    }
}
