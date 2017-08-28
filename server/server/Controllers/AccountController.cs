using System.Threading.Tasks;
using Server.Models;
using Server.BLL.Interfaces;
using System.Web.Http;
using System.Web;
using System.Net;
using Microsoft.Owin.Security;
using System.Net.Http;
using Microsoft.AspNet.Identity;
using System;
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
        private IAuthenticationManager AuthenticationManager
        {
            get
            {
                return HttpContext.Current.GetOwinContext().Authentication;
            }
        }

        [HttpPost]
        [Route("api/account/login")]
        public async Task<object> Login(UserViewModel model)
        {
            if (ModelState.IsValid)
            {   try
                {
                    var user = await _userManager.FindAsync(model.Email, model.Password);
                    if (user != null)
                    {
                        await SignInAsync(user, true);
                        return user;
                    }
                } 
                catch(Exception)
                {
                    return BadRequest("Wrong email or password");
                }
            }
            throw new HttpResponseException(HttpStatusCode.BadRequest);
        }

        [HttpPost]
        [Route("api/account/register")]
        public async Task<object> Register(UserViewModel model)
        {
            if (ModelState.IsValid)
            {
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
                return BadRequest(list[0]);
            }
            throw new HttpResponseException(HttpStatusCode.BadRequest);
        }
        public string Logout()
        {
            AuthenticationManager.SignOut();
            return "exit";
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
