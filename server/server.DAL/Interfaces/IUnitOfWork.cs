using System;

using Server.DAL.Entities;
using System.Threading.Tasks;

namespace Server.DAL.Interfaces
{
    public interface IUnitOfWork : IDisposable
    {
        IRepository<User> Users { get; }
        IRepository<Advert> Adverts { get; }
        IRepository<Message> Messages { get; }
        Task SaveAsync();
    }
}
