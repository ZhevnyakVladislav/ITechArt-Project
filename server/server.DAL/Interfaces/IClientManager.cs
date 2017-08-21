using Server.DAL.Entities;
using System;


namespace Server.DAL.Interfaces
{
    public interface IClientManager : IDisposable
    {
        void Create(ClientProfile ClientProfile);
    }
}
