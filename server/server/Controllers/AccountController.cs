using System.Threading.Tasks;
using Server.Models;
using Server.BLL.DTO;
using Server.BLL.Interfaces;
using System.Security.Claims;
using System.Web.Http;
using System.Web;
using System.Web.Http.Cors;
using System.Net;
using AutoMapper;
using Microsoft.Owin.Security;
using Microsoft.AspNet.Identity.Owin;
using System.Net.Http;
using Microsoft.AspNet.Identity;
using Server.BLL.Infrastructure;

namespace Server.Controllers
{
    
    [EnableCors(origins: "*", headers: "*", methods: "*")]
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
        public async Task<UserViewModel> Login(UserViewModel model)
        {
            if (ModelState.IsValid)
            {
                var user = await _userManager.FindAsync(model.Email, model.Password);
                if(user != null)
                {
                    await SignInAsync(user, true);
                    user.Password = null;
                    return user;
                }
            }
            throw new HttpResponseException(HttpStatusCode.BadRequest);
        }

        [HttpPost]
        public async Task Register(UserViewModel model)
        {
            if (ModelState.IsValid)
            {
                var result = await _userManager.CreateAsync(model, model.Password);
                if (result.Succeeded)
                {
                    await SignInAsync(model, isPersistent: true);
                    return;
                }
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
        }

    }
}
