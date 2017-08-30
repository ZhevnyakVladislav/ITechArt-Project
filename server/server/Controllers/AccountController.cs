using System.Threading.Tasks;
using Server.Models;
using System.Web.Http;
using System.Web;
using System.Net;
using Microsoft.Owin.Security;
using System.Net.Http;
using Microsoft.AspNet.Identity;
using System.Collections.Generic;

namespace Server.Controllers
{
    public class AccountController : ApiController
    {
        UserManager<UserViewModel, int> _userManager;
        public AccountController(UserManager<UserViewModel, int> userManager)
        {
            _userManager = userManager;

        }

        private static IAuthenticationManager AuthenticationManager => HttpContext.Current.GetOwinContext().Authentication;

        [HttpPost]
        [Route("api/account/login")]
        public async Task<UserViewModel> Login(UserViewModel model)
        {
            if (!ModelState.IsValid)
                throw new HttpResponseException(new HttpResponseMessage(HttpStatusCode.BadRequest)
                {
                    Content = new StringContent("Model state is nit valid"),
                });
            try
            {
                var user = await _userManager.FindAsync(model.Email, model.Password);
                if (user != null)
                {
                    await SignInAsync(user, true);
                    return user;
                }
            }
            catch
            {
                throw new HttpResponseException(new HttpResponseMessage(HttpStatusCode.BadRequest)
                {
                    Content = new StringContent("Wrong email or password"),
                });
            }
            throw new HttpResponseException(new HttpResponseMessage(HttpStatusCode.BadRequest)
            {
                Content = new StringContent("Model state is nit valid"),
            });

        }

        [HttpPost]
        [Route("api/account/register")]
        public async Task<UserViewModel> Register(UserViewModel model)
        {
            if (!ModelState.IsValid)
                throw new HttpResponseException(new HttpResponseMessage(HttpStatusCode.BadRequest)
                {
                    Content = new StringContent("Model state is nit valid")
                });
            model.UserName = model.Email;
            var userPassword = model.Password;
            var result = await _userManager.CreateAsync(model, model.Password);
            if (result.Succeeded)
            {
                var user = await _userManager.FindAsync(model.Email, userPassword);
                if (user != null)
                {
                    await SignInAsync(user, true);
                    return user;
                }
            }
            var list = (IList<string>)result.Errors;
            throw new HttpResponseException(new HttpResponseMessage(HttpStatusCode.BadRequest)
            {
                Content = new StringContent(list[0])
            });
        }
        public void Logout()
        {
            AuthenticationManager.SignOut();
        }
        private async Task SignInAsync(UserViewModel user, bool isPersistent)
        {
            AuthenticationManager.SignOut(DefaultAuthenticationTypes.ExternalCookie);
            var identity = await _userManager.CreateIdentityAsync(user, DefaultAuthenticationTypes.ApplicationCookie);
            AuthenticationManager.SignIn(new AuthenticationProperties() { IsPersistent = isPersistent }, identity);
            user.Password = null;
        }

    }
}
