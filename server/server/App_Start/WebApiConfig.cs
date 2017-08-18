using Microsoft.Practices.Unity;
using Server.BLL.Interfaces;
using Server.BLL.Services;
using Server.Controllers;
using Server.DAL.Interfaces;
using Server.DAL.Repositories;
using System.Web.Http;
using Unity.WebApi;

namespace Server
{
    public static class WebApiConfig
    {
        public static void Register(HttpConfiguration config)
        {

            // Web API routes
            config.MapHttpAttributeRoutes();

            config.Routes.MapHttpRoute(
                name: "DefaultApi",
                routeTemplate: "api/{controller}/{id}",
                defaults: new { id = RouteParameter.Optional }
            );

            config.Routes.MapHttpRoute(
                name: "UserRoute",
                routeTemplate: "api/{controller}/{action}"
            );
        }
    }
}
