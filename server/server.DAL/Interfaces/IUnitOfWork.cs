using System;
using Server.DAL.Entities;
using System.Threading.Tasks;
using Microsoft.Owin.BuilderProperties;
using server.DAL.Entities;
using Address = server.DAL.Entities.Address;

namespace Server.DAL.Interfaces
{
    public interface IUnitOfWork : IDisposable
    {
        IRepository<User> Users { get; }
        IRepository<Advert> Adverts { get; }
        IRepository<Message> Messages { get; }
        IRepository<Address> Addresses { get; }
        IRepository<Country> Countries { get; }
        IRepository<City> Cities { get; }

        Task SaveAsync();
        void Save();
    }
}
