using System;
using Server.DAL.Interfaces;
using Server.DAL.Entities;
using System.Threading.Tasks;
using System.Data.Entity;
using server.DAL.Entities;

namespace Server.DAL.Repositories
{
    public class EfUnitOfWork : IUnitOfWork
    {
        private DbContext _db;
        private CommonRepository<User> _userRepository;
        private CommonRepository<Advert> _advertRepository;
        private CommonRepository<Message> _messageRepository;
        private CommonRepository<Address> _addressRposiRepository;
        private CommonRepository<Country> _countryRposiRepository;
        private CommonRepository<City> _cityRposiRepository;


        private bool disposed = false;

        public EfUnitOfWork(DbContext context)
        {
            _db = context;
        }
        public IRepository<User> Users => _userRepository ?? (_userRepository = new CommonRepository<User>(_db));
        public IRepository<Advert> Adverts => _advertRepository ?? (_advertRepository = new CommonRepository<Advert>(_db));
        public IRepository<Message> Messages => _messageRepository ?? (_messageRepository = new CommonRepository<Message>(_db));

        public IRepository<Address> Addresses => _addressRposiRepository ?? (_addressRposiRepository = new CommonRepository<Address>(_db));
        public IRepository<Country> Countries => _countryRposiRepository ?? (_countryRposiRepository = new CommonRepository<Country>(_db));
        public IRepository<City> Cities => _cityRposiRepository ?? (_cityRposiRepository = new CommonRepository<City>(_db));


        public async Task SaveAsync()
        {
            await _db.SaveChangesAsync();
        }
        public void Save()
        {
            _db.SaveChanges();
        }
        public virtual void Dispose(bool disposing)
        {
            if (disposed) return;
            if (disposing)
            {
                _db.Dispose();
            }
            this.disposed = true;
        }

        public void Dispose()
        {
            Dispose(true);
            GC.SuppressFinalize(this);
        }
    }
}
