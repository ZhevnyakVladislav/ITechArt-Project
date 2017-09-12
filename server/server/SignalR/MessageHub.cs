using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Web;
using Microsoft.AspNet.SignalR;
using Microsoft.AspNet.SignalR.Hubs;
using Microsoft.AspNet.SignalR.Infrastructure;
using Newtonsoft.Json;
using Newtonsoft.Json.Serialization;
using Server.Models;

namespace server.SignalR
{
    [HubName("MessageChat")]
    public class MessageHub : Hub
    {
        public void Send(IEnumerable<MessageViewModel> messages)
        {
            var settings = new JsonSerializerSettings();
            settings.ContractResolver = new SignalRContractResolver();
            var serializer = JsonSerializer.Create(settings);
            GlobalHost.DependencyResolver.Register(typeof(JsonSerializer), () => serializer);
            var context = GlobalHost.ConnectionManager.GetHubContext<MessageHub>();
            context.Clients.All.Send(messages);
        }
       
    }
    public class SignalRContractResolver : IContractResolver
    {

        private readonly Assembly assembly;
        private readonly IContractResolver camelCaseContractResolver;
        private readonly IContractResolver defaultContractSerializer;

        public SignalRContractResolver()
        {
            defaultContractSerializer = new DefaultContractResolver();
            camelCaseContractResolver = new CamelCasePropertyNamesContractResolver();
            assembly = typeof(Connection).Assembly;
        }

        public JsonContract ResolveContract(Type type)
        {
            if (type.Assembly.Equals(assembly))
            {
                return defaultContractSerializer.ResolveContract(type);

            }

            return camelCaseContractResolver.ResolveContract(type);
        }

    }
}