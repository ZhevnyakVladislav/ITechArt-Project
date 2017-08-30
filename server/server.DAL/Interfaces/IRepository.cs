using System;
using System.Collections.Generic;
using System.Linq;

namespace Server.DAL.Interfaces
{
    public interface IRepository<T> where T : class
    {
        IEnumerable<T> GetAll();
        T Get(int id);
        T FindByField(Func<T, bool> predicate);
        IEnumerable<T> FindFew(Func<T, bool> predicate);
        IQueryable<T> GetQuryable();

        void Create(T item);
        void Update(T item);
        void Delete(int id);

    }
}
