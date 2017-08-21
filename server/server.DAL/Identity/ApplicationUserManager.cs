using Microsoft.AspNet.Identity;
using Server.DAL.Entities;

namespace Server.DAL.Identity
{
    public class ApplicationUserManager : UserManager<ApplicationUser>
    {
        public ApplicationUserManager(IUserStore<ApplicationUser> store): base(store) { }
    }
}
