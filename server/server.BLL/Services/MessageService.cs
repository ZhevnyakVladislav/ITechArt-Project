using AutoMapper;
using Server.BLL.DTO;
using Server.BLL.Interfaces;
using Server.DAL.Entities;
using Server.DAL.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Server.BLL.Services
{
    public class MessageService : IMessageService
    {
        // I'd name it _unitOfWork, there may be no database behind unit of work abstraction.
        IUnitOfWork _database;
        IMapper _mapper;

        public MessageService(IUnitOfWork db, IMapper mapper)
        {
            _database = db;
            _mapper = mapper;
        }
        public void Create(MessageDTO model)
        {
            var advert = _database.Adverts.Get(model.AdvertId);
            // 'advert.IsActive == true', you can just use advert.IsActive, it's boolean
            if (advert.InterestedUserId == null && advert.IsActive == true)
            {
                advert.IsActive = false;
                // Is it correct?
                advert.InterestedUserId = model.AuthorId;
            }
            var message = MapOneModel(model);
            message.CreatedAt = DateTime.Now;
            advert.UpdatedAt = DateTime.Now;
            _database.Messages.Create(message);
            _database.Adverts.Update(advert);
            _database.Save();
        }
        public IEnumerable<MessageDTO> GetByAdvertId(int? AdvertId)
        {
            var messages = MapFewModel(_database.Messages.FindFew(item => item.AdvertId == AdvertId));
            return messages;
        }
        private Message MapOneModel(MessageDTO message)
        {
            return _mapper.Map<MessageDTO, Message>(message);
        }
        private IEnumerable<MessageDTO> MapFewModel(IEnumerable<Message> messages)
        {
            return _mapper.Map<IEnumerable<Message>, IEnumerable<MessageDTO>>(messages);
        }
    }
}
