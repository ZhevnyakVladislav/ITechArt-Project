using Microsoft.AspNet.Identity;
using Microsoft.AspNet.Identity.Owin;
using Microsoft.Owin;
using server.Identity;
using Server.BLL.Infrastructure;
using Server.BLL.Interfaces;
using Server.DAL.Entity_Framework;
using Server.DAL.Interfaces;
using Server.Models;
using System;
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
            var user = Store.FindByNameAsync(email).Result;
            if (user != null)
            {
                PasswordVerificationResult result = this.PasswordHasher.VerifyHashedPassword(user.Password, password);
                if (result == PasswordVerificationResult.Success)
                {
                    return Task.FromResult<UserViewModel>(user);
                }
                return null;
            }
            return null;
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
                throw new ArgumentNullException("user");
            }
            if (password == null)
            {
                throw new ArgumentNullException("password");
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