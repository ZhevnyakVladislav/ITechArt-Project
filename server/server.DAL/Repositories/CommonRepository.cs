using Server.DAL.EntityFramework;
using Server.DAL.Interfaces;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;

namespace Server.DAL.Repositories
{
    public class CommonRepository<T> : IRepository<T> where T : class
    {
        DbContext _context;
        DbSet<T> _dbSet;
        public CommonRepository(DbContext context)
        {
            _context = context;
            _dbSet = context.Set<T>();
        }

        public IEnumerable<T> GetAll()
        {
            return _dbSet.ToList();
        }

        public T Get(int id)
        {
            return _dbSet.Find(id);
        }

        public void Create(T item)
        {
            _dbSet.Add(item);
        }

        public void Update(T item)
        {
            _context.Entry(item).State = EntityState.Modified;
        }
        public T FindByField(Func<T, bool> predicate)
        {
            return _dbSet.FirstOrDefault(predicate);
        }
        public IEnumerable<T> FindFew(Func<T, bool> predicate)
        {
            return _dbSet.Where(predicate).ToList();
        }
        public IQueryable<T> GetQuryable()
        {
            return _dbSet;
        }
        public void Delete(int id)
        {
            var item = _dbSet.Find(id);
            if (item != null)
            {
                _dbSet.Remove(item);
            }
        }
    }
}
