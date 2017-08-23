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
    public class UserRepository : IRepository<User>
    {
        private ProjectContext db;

        public UserRepository(ProjectContext context)
        {
            this.db = context;
        }
        public IEnumerable<User> GetAll()
        {
            return db.Users;
        }
        public User Get(int id)
        {
            return db.Users.Find(id);
        }
        public void Create(User user)
        {
            db.Users.Add(user);
        }
        public void Update(User user)
        {
            db.Entry(user).State = EntityState.Modified;
        }
        public User FindByField(Func<User, bool> predicate)
        {
            return db.Users.FirstOrDefault(predicate);
        }
        public IEnumerable<User> FindFew(Func<User, bool> predicate)
        {
            return db.Users.Where(predicate).ToList();
        }
        public User Find(Func<User, Boolean> predicate)
        {
            return db.Users.FirstOrDefault(predicate);
        }

        public void Delete(int id)
        {
            User user = db.Users.Find(id);
            if (user != null)
            {
                db.Users.Remove(user);
            }
        }
    }
}
