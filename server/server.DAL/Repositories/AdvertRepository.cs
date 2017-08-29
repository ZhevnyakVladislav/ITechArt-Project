﻿using System;
using System.Collections.Generic;
using System.Linq;
using Server.DAL.Entities;
using Server.DAL.Interfaces;
using System.Data.Entity;
using Server.DAL.Entity_Framework;

namespace Server.DAL.Repositories
{
    // I think you can create generic repository class instead of calss per entity, all methods are the same
    class AdvertRepository : IRepository<Advert>
    {
        private ProjectContext db;

        public AdvertRepository(ProjectContext context)
        {
            this.db = context;
        }

        public IEnumerable<Advert> GetAll()
        {
            return db.Adverts.ToList();
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
        public Advert FindByField(Func<Advert, bool> predicate)
        {
            return db.Adverts.Find(predicate);
        }
        public IEnumerable<Advert> FindFew(Func<Advert, bool> predicate)
        {
            return db.Adverts.Where(predicate).ToList();
        }
        public IQueryable<Advert> GetQuryable()
        {
            return db.Adverts;
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
