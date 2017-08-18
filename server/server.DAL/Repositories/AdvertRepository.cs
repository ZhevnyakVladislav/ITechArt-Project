using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Server.DAL.Entities;
using Server.DAL.Interfaces;
using System.Data.Entity;
using server.DAL.Entity_Framework;

namespace Server.DAL.Repositories
{
    class AdvertRepository : IRepository<Advert>
    {
        private ProjectContext db;

        public AdvertRepository(ProjectContext context)
        {
            this.db = context;
        }

        public IEnumerable<Advert> GetAll()
        {
            return db.Adverts;
        }

        public Advert Get(int id)
        {
            return db.Adverts.Find(id);
        }

        public void Create(Advert advert)
        {
            db.Adverts.Add(advert);
        }

        public void Update(Advert advert)
        {
            db.Entry(advert).State = EntityState.Modified;
        }

        public IEnumerable<Advert> Find(Func<Advert, bool> predicate)
        {
            return db.Adverts.Where(predicate).ToList();
        }

        public void Delete(int id)
        {
            Advert advert = db.Adverts.Find(id);
            if (advert != null)
            {
                db.Adverts.Remove(advert);
            }
        }
    }
}
