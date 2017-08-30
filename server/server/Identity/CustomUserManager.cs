using System;
using System.Threading.Tasks;
using Microsoft.AspNet.Identity;
using Server.Identity;
using Server.Models;

namespace Server.Identity
{
    public class CustomUserManager : UserManager<UserViewModel, int>
    {
        public CustomUserManager(UserStore store) : base(store) { }
        public override Task<UserViewModel> FindAsync(string email, string password)
        {
            var user = Store.FindByNameAsync(email).Result;
            if (user == null) return null;
            var result = PasswordHasher.VerifyHashedPassword(user.Password, password);
            return result == PasswordVerificationResult.Success ? Task.FromResult(user) : null;
        }
        public override async Task<IdentityResult> CreateAsync(UserViewModel user)
        {
            var result = await UserValidator.ValidateAsync(user);
            if (!result.Succeeded)
            {
                return result;
            }
            await Store.CreateAsync(user);

            return IdentityResult.Success;
        }
        public override async Task<IdentityResult> CreateAsync(UserViewModel user, string password)
        {
            if (user == null)
            {
                throw new ArgumentNullException(nameof(user));
            }
            if (password == null)
            {
                throw new ArgumentNullException(nameof(password));
            }

            var result = await PasswordValidator.ValidateAsync(password);
            if (!result.Succeeded)
            {
                return result;
            }

            user.Password = PasswordHasher.HashPassword(password);

            return await CreateAsync(user);
        }
    }
}