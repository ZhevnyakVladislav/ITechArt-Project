using AutoMapper;
using Server.Models;
using Server.BLL.DTO;
using Server.BLL.Interfaces;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web.Http;
using Microsoft.AspNet.SignalR;
using Microsoft.Web.WebSockets;
using server.SignalR;

namespace Server.Controllers
{
    [System.Web.Http.Authorize]
    public class MessageController : ApiController
    {
        IMessageService _messageService;
        IUserService _userService;
        IMapper _mapper;
        MessageHub _chatHub;

        public MessageController(IMessageService messageService, IUserService userService, IMapper mapper, MessageHub chatHub)
        {
            _messageService = messageService;
            _userService = userService;
            _mapper = mapper;
            _chatHub = chatHub;
        }

        // GET: api/Message
        public IEnumerable<MessageViewModel> Get(int advertId)
        {
            return MapFewModel(_messageService.GetByAdvertId(advertId));
        }


        // POST: api/Message
        public void Post([FromBody] MessageViewModel model)
        {
            var message = MapOneModel(model);
            var user = _userService.FindByName(User.Identity.Name);
            message.AuthorId = user.Id;
            _messageService.Create(message);
            _chatHub.Send(MapFewModel(_messageService.GetByAdvertId(model.AdvertId)), model.AdvertId.ToString());

        }

        private MessageDTO MapOneModel(MessageViewModel message)
        {
            return _mapper.Map<MessageViewModel, MessageDTO>(message);
        }

        private IEnumerable<MessageViewModel> MapFewModel(IEnumerable<MessageDTO> messages)
        {
            return _mapper.Map<IEnumerable<MessageDTO>, IEnumerable<MessageViewModel>>(messages);
        }

    }
}
