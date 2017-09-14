using System;
using System.Collections.Generic;
using Infrastructure.Interfaces;
using System.Runtime.Caching;

namespace Infrastructure.Cache
{
    public class AdvertCache<T> : IAdvertCache<T> where T : class 
    {

        public bool AddAuthorAdverts(string key, IEnumerable<T> adverts)
        {
            return MemoryCache.Default.Add(key, adverts, DateTime.Now.AddSeconds(5));
        }
        public bool AddInterestedAdverts(string key, IEnumerable<T> adverts)
        {
            return MemoryCache.Default.Add(key, adverts, DateTime.Now.AddSeconds(5));
        }
        public bool AddTypedAdverts(string key, IEnumerable<T> adverts)
        {
            return MemoryCache.Default.Add(key, adverts, DateTime.Now.AddSeconds(5));
        }
        public IEnumerable<T> GetAuthorAdverts(string key)
        {
            return MemoryCache.Default.Get(key) as IEnumerable<T>;
        }
        public IEnumerable<T> GetInterestedAdverts(string key)
        {
            return MemoryCache.Default.Get(key) as IEnumerable<T>;
        }
        public IEnumerable<T> GetAdvertsByType(string key)
        {
            return MemoryCache.Default.Get(key) as IEnumerable<T>;
        }

        public void ResetCache()
        {
            MemoryCache.Default.Dispose();
        }
    }
}
