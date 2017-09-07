using System.Collections.Generic;

namespace Infrastructure.Interfaces
{
    public interface IAdvertCache<T> where T : class 
    {
        IEnumerable<T> GetAuthorAdverts();
        IEnumerable<T> GetInterestedAdverts();
        IEnumerable<T> GetAdvertsByType(string key);

        bool AddAuthorAdverts(IEnumerable<T> adverts);
        bool AddInterestedAdverts(IEnumerable<T> adverts);
        bool AddTypedAdverts(string key, IEnumerable<T> adverts);
    }
}
