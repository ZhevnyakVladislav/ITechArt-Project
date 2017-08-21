using System;

using Server.DAL.Entities;
using Server.DAL.Identity;
using System.Threading.Tasks;

namespace Server.DAL.Interfaces
{
    public interface IUnitOfWork : IDisposable
    {
        IClientManager ClientManager { get; }
        ApplicationRoleManager RoleManager { get; }
        ApplicationUserManager UserManager { get; }
        IRepository<ClientProfile> Users { get; }
        IRepository<Advert> Adverts { get; }
        IRepository<Message> Messages { get; }
        Task SaveAsync();
    }
}
