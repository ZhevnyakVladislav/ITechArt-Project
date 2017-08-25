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
        IUserService _userService;
        UserManager<UserViewModel, int> _userManager;
        public AccountController(IUserService userSercice, UserManager<UserViewModel, int> userManager)
        {
            _userService = userSercice;
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

        [HttpGet]
        [Authorize]
        [Route("api/account/checkauth")]
        public async Task<object> CheckAuth()
        {
            var user = _userService.FindByName(User.Identity.Name);
            return user;
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
