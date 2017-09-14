using System.Collections.Generic;

namespace Infrastructure.Interfaces
{
    public interface IAdvertCache<T> where T : class 
    {
        IEnumerable<T> GetAuthorAdverts(string key);
        IEnumerable<T> GetInterestedAdverts(string key);
        IEnumerable<T> GetAdvertsByType(string key);

        bool AddAuthorAdverts(string key, IEnumerable<T> adverts);
        bool AddInterestedAdverts(string key, IEnumerable<T> adverts);
        bool AddTypedAdverts(string key, IEnumerable<T> adverts);
        void ResetCache();
    }
}
