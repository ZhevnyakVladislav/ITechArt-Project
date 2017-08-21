using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Server.DAL.Entities;
using Server.DAL.Interfaces;
using System.Data.Entity;
using Server.DAL.Entity_Framework;

namespace Server.DAL.Repositories
{
    public class UserRepository : IRepository<ClientProfile>
    {
        private ProjectContext db;

        public UserRepository(ProjectContext context)
        {
            this.db = context;
        }

        public IEnumerable<ClientProfile> GetAll()
        {
            return db.ClientProfiles;
        }

        public ClientProfile Get(int id)
        {
            return db.ClientProfiles.Find(id);
        }

        public void Create(ClientProfile user)
        {
            db.ClientProfiles.Add(user);
        }

        public void Update(ClientProfile user)
        {
            db.Entry(user).State = EntityState.Modified;
        }

        public IEnumerable<ClientProfile> Find(Func<ClientProfile, Boolean> predicate)
        {
            return db.ClientProfiles.Where(predicate).ToList();
        }

        public void Delete(int id)
        {
            ClientProfile user = db.ClientProfiles.Find(id);
            if (user != null)
            {
                db.ClientProfiles.Remove(user);
            }
        }
    }
}
