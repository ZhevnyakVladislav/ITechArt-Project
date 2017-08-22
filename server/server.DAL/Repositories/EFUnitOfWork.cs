using System;
using Server.DAL.Interfaces;
using Server.DAL.Entity_Framework;
using Server.DAL.Entities;
using System.Threading.Tasks;

namespace Server.DAL.Repositories
{
    public class EFUnitOfWork : IUnitOfWork
    {
        private ProjectContext db;
        private UserRepository userRepository;
        private AdvertRepository advertRepository;
        private MessageRepository messageRepository;

        private bool disposed = false;

        public EFUnitOfWork(string connectionString)
        {
            db = new ProjectContext(connectionString);
        }
        public IRepository<User> Users
        {
            get
            {
                if (userRepository == null)
                {
                    userRepository = new UserRepository(db);
                }
                return userRepository;
            }
        }
        public IRepository<Advert> Adverts
        {
            get
            {
                if (advertRepository == null)
                    advertRepository = new AdvertRepository(db);
                return advertRepository;
            }
        }
        public IRepository<Message> Messages
        {
            get
            {
                if (messageRepository == null)
                    messageRepository = new MessageRepository(db);
                return messageRepository;
            }
        }

        public async Task SaveAsync()
        {
            await db.SaveChangesAsync();
        }

        public virtual void Dispose(bool disposing)
        {
            if (!this.disposed)
            {
                if (disposing)
                {
                    db.Dispose();
                }
                this.disposed = true;
            }
        }

        public void Dispose()
        {
            Dispose(true);
            GC.SuppressFinalize(this);
        }
    }
}
