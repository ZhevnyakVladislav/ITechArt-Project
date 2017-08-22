using Microsoft.AspNet.Identity;
using Microsoft.Owin;
using server.Identity;
using Server.Models;
using System.Threading.Tasks;

namespace Server.Models
{
    public class CustomUserManager : UserManager<UserViewModel, int>
    {
        public CustomUserManager(UserStore store) : base(store)
        {
            this.PasswordHasher = new CustomPasswordHasher();
        }

        public override Task<UserViewModel> FindAsync(string email, string password)
        {
            Task<UserViewModel> taskInvoke = Task<UserViewModel>.Factory.StartNew(() =>
            {
                PasswordVerificationResult result = this.PasswordHasher.VerifyHashedPassword(email, password);
                if (result == PasswordVerificationResult.SuccessRehashNeeded)
                {
                    return Store.FindByNameAsync(email).Result;
                }
                return null;
            });
            return taskInvoke;
        }
        
    }
}