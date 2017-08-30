using AutoMapper;
using Server.Models;
using Server.BLL.DTO;
using Server.BLL.Interfaces;
using System.Collections.Generic;
using System.Web.Http;

namespace Server.Controllers
{
    [Authorize]
    public class MessageController : ApiController
    {
        IMessageService _messageService;
        IUserService _userService;
        IMapper _mapper;

        public MessageController(IMessageService messageService, IUserService userService, IMapper mapper)
        {
            _messageService = messageService;
            _userService = userService;
            _mapper = mapper;
        }
        // GET: api/Message
        public IEnumerable<MessageViewModel> Get(int advertId)
        {
            return MapFewModel(_messageService.GetByAdvertId(advertId));
        }


        // POST: api/Message
        public void Post([FromBody]MessageViewModel model)
        {
            var message = MapOneModel(model);
            var user = _userService.FindByName(User.Identity.Name);
            message.AuthorId = user.Id;
            _messageService.Create(message);
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
