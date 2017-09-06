using System;
using Server.DAL.Entities;
using System.Threading.Tasks;
using Microsoft.Owin.BuilderProperties;
using Address = server.DAL.Entities.Address;

namespace Server.DAL.Interfaces
{
    public interface IUnitOfWork : IDisposable
    {
        IRepository<User> Users { get; }
        IRepository<Advert> Adverts { get; }
        IRepository<Message> Messages { get; }
        IRepository<Address> Addresses { get; }
        Task SaveAsync();
        void Save();
    }
}
