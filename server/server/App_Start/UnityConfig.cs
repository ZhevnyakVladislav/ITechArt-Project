using AutoMapper;
using Microsoft.Owin.Security;
using Microsoft.Practices.Unity;
using Server.Controllers;
using Server.BLL.Interfaces;
using Server.BLL.Services;
using Server.DAL.Interfaces;
using Server.DAL.Repositories;
using System.Web.Http;
using Unity.WebApi;

namespace Server
{
    public static class UnityConfig
    {
        public static void RegisterComponents()
        {
			var container = new UnityContainer();

            container
                .RegisterType<UserController>()
                .RegisterType<AccountController>()
                .RegisterType<IUserService, UserService>()
                .RegisterType<IAuthenticationManager>()
                .RegisterType<IUnitOfWork, EFUnitOfWork>(new InjectionConstructor("name=ProjectContext"));

            GlobalConfiguration.Configuration.DependencyResolver = new UnityDependencyResolver(container);
        }
    }
}