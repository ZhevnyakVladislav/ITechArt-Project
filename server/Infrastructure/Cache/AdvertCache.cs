using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Infrastructure.Interfaces;
using System.Runtime.Caching;

namespace Infrastructure.Cache
{
    public class AdvertCache<T> : IAdvertCache<T> where T : class 
    {

        public bool AddAuthorAdverts(IEnumerable<T> adverts)
        {
            return MemoryCache.Default.Add("author", adverts, DateTime.Now.AddSeconds(20));
        }
        public bool AddInterestedAdverts(IEnumerable<T> adverts)
        {
            return MemoryCache.Default.Add("interested", adverts, DateTime.Now.AddSeconds(20));
        }
        public bool AddTypedAdverts(string key, IEnumerable<T> adverts)
        {
            return MemoryCache.Default.Add(key, adverts, DateTime.Now.AddSeconds(20));
        }
        public IEnumerable<T> GetAuthorAdverts()
        {
            return MemoryCache.Default.Get("author") as IEnumerable<T>;
        }
        public IEnumerable<T> GetInterestedAdverts()
        {
            return MemoryCache.Default.Get("interested") as IEnumerable<T>;
        }
        public IEnumerable<T> GetAdvertsByType(string key)
        {
            return MemoryCache.Default.Get(key) as IEnumerable<T>;
        }
    }
}
