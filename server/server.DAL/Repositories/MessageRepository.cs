using System;
using System.Collections.Generic;
using System.Linq;
using Server.DAL.Entities;
using Server.DAL.Interfaces;
using System.Data.Entity;
using server.DAL.Entity_Framework;

namespace Server.DAL.Repositories
{
    class MessageRepository : IRepository<Message>
    {
        private ProjectContext db;

        public MessageRepository(ProjectContext context)
        {
            this.db = context;
        }

        public IEnumerable<Message> GetAll()
        {
            return db.Messages;
        }

        public Message Get(int id)
        {
            return db.Messages.Find(id);
        }

        public void Create(Message message)
        {
            db.Messages.Add(message);
        }

        public void Update(Message message)
        {
            db.Entry(message).State = EntityState.Modified;
        }

        public IEnumerable<Message> Find(Func<Message, bool> predicate)
        {
            return db.Messages.Where(predicate).ToList();
        }

        public void Delete(int id)
        {
            Message message = db.Messages.Find(id);
            if (message != null)
            {
                db.Messages.Remove(message);
            }
        }
    }
}
