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
using Server.Models;
using Server.Identity;
using Microsoft.AspNet.Identity;
using System.Data.Entity;
using System.Web.Configuration;
using Infrastructure.Cache;
using Infrastructure.Interfaces;
using Server;
using Server.BLL.DTO;
using Server.DAL.EntityFramework;

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
                .RegisterType<AdvertController>()
                .RegisterType<IUserStore<UserViewModel, int>, UserStore>()
                .RegisterType<UserManager<UserViewModel, int>, CustomUserManager>()
                .RegisterType<IUserService, UserService>()
                .RegisterType<IAdvertService, AdvertService>()
                .RegisterType<IMessageService, MessageService>()
                .RegisterType<IImageService, ImageService>(new InjectionConstructor(
                    WebConfigurationManager.AppSettings["cloudinaryName"], 
                    WebConfigurationManager.AppSettings["cloudinaryPassword"], 
                    WebConfigurationManager.AppSettings["cloudinarySecret"]))
                .RegisterType<IAuthenticationManager>()
                .RegisterInstance<IMapper>(MapperConfig.GetMapper())
                .RegisterType<IUnitOfWork, EfUnitOfWork>()
                .RegisterType<DbContext, ProjectContext>(new InjectionConstructor("name=ProjectContext"))
                .RegisterType<IAdvertCache<AdvertDTO>, AdvertCache<AdvertDTO>>();

            var cloudinaarySetting = WebConfigurationManager.AppSettings["cloudinaryName"];
            GlobalConfiguration.Configuration.DependencyResolver = new UnityDependencyResolver(container);
        }
    }
}