using AutoMapper;
using Microsoft.Practices.Unity;
using Server.BLL.Interfaces;
using Server.BLL.Services;
using Server.Controllers;
using Server.DAL.Interfaces;
using Server.DAL.Repositories;
using System.Web.Http;
using Unity.WebApi;

namespace server
{
    public static class UnityConfig
    {
        public static void RegisterComponents()
        {
			var container = new UnityContainer();

            container
                .RegisterType<UserController>()
                .RegisterType<IUserService, UserService>()
                .RegisterType<IUnitOfWork, EFUnitOfWork>(new InjectionConstructor("name=ProjectContext"));

            GlobalConfiguration.Configuration.DependencyResolver = new UnityDependencyResolver(container);
        }
    }
}