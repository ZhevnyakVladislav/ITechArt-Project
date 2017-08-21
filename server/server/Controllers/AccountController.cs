using System.Web.Http;
using Microsoft.Owin.Security;
using System.Threading.Tasks;
using Server.Models;
using Server.BLL.DTO;
using System.Security.Claims;
using Server.BLL.Interfaces;
using System.Web.Mvc;
using AutoMapper;
using Server.BLL.Infrastructure;
using System.Web;
using Microsoft.Owin.Host.SystemWeb;
namespace Server.Controllers
{
    public class AccountController : ApiController
    {
        IUserService _userService;
        private IAuthenticationManager AuthenticationManager
        {
            get
            {
                return HttpContext.Current.GetOwinContext().Authentication;
            }
        }

        [System.Web.Http.HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<string> Login(UserViewModel model)
        {
            if (ModelState.IsValid)
            {
                Mapper.Initialize(cfg => cfg.CreateMap<UserViewModel, UserDTO>());
                var userDto = Mapper.Map<UserViewModel, UserDTO>(model);
                ClaimsIdentity claim = await _userService.Authenticate(userDto);
                if (claim == null)
                {
                    ModelState.AddModelError("", "Неверный логин или пароль.");
                }
                else
                {
                    AuthenticationManager.SignOut();
                    AuthenticationManager.SignIn(new AuthenticationProperties
                    {
                        IsPersistent = true
                    }, claim);
                    return "login successfull";
                }
            }
            return "Login error";
        }

        [System.Web.Http.HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<string> Register(UserViewModel model)
        {
            if (ModelState.IsValid)
            {
                Mapper.Initialize(cfg => cfg.CreateMap<UserViewModel, UserDTO>());
                var userDto = Mapper.Map<UserViewModel, UserDTO>(model);
                OperationDetails operationDetails = await _userService.Create(userDto);
                if (operationDetails.Succedeed)
                    return "SuccessRegister";
                else
                    ModelState.AddModelError(operationDetails.Property, operationDetails.Message);
            }
            return "error";
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
