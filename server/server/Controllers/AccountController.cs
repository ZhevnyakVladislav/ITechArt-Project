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

namespace Server.Controllers
{
    
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    public class AccountController : ApiController
    {
        IUserService _userService;
        public CustomUserManager UserManager
        {
            get
            {
                return HttpContext.Current.GetOwinContext().GetUserManager<CustomUserManager>();
            }
        }
        private IAuthenticationManager AuthenticationManager
        {
            get
            {
                return HttpContext.Current.GetOwinContext().Authentication;
            }
        }

        [HttpPost]
        public async Task<string> Login(UserViewModel model)
        {
            if (ModelState.IsValid)
            {
                var user = await UserManager.FindAsync(model.Email, model.Password);
                if(user != null)
                {
                    AuthenticationManager.SignOut();
                    var claim = await UserManager.CreateIdentityAsync(user, DefaultAuthenticationTypes.ApplicationCookie);
                    AuthenticationManager.SignIn(new AuthenticationProperties
                    {
                        IsPersistent = true
                    }, claim);
                    return "login successfull";
                }
            }
            throw new HttpResponseException(HttpStatusCode.BadRequest);
        }

        [HttpPost]
        public Task<string> Register(UserViewModel model)
        {
            //if (ModelState.IsValid)
            //{
            //    Mapper.Initialize(cfg => cfg.CreateMap<UserViewModel, UserDTO>());
            //    var userDto = Mapper.Map<UserViewModel, UserDTO>(model);
            //    //OperationDetails operationDetails =  _userService.Create(userDto);
            //    if (operationDetails.Succedeed)
            //        return "SuccessRegister";
            //    else
            //        ModelState.AddModelError(operationDetails.Property, operationDetails.Message);
            //}
            return Task.FromResult("error");
        }
        public string Logout()
        {
            AuthenticationManager.SignOut();
            return "exit";
        }
        public AccountController(IUserService userSercice)
        {
            _userService = userSercice;
        }
    }
}
