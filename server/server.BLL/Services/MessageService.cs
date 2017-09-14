using AutoMapper;
using Server.BLL.DTO;
using Server.BLL.Interfaces;
using Server.DAL.Entities;
using Server.DAL.Interfaces;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;

namespace Server.BLL.Services
{
    public class MessageService : IMessageService
    {
        IUnitOfWork _unitOfWork;
        IMapper _mapper;

        public MessageService(IUnitOfWork db, IMapper mapper)
        {
            _unitOfWork = db;
            _mapper = mapper;
        }
        public void Create(MessageDTO model)
        {
            var advert = _unitOfWork.Adverts.Get(model.AdvertId);
            model.CreatedAt = DateTime.Now;
            var message = MapOneModel(model);
            if (advert.InterestedUserId == null && advert.AuthorId != model.AuthorId)
            {
                CreateResponse(message, advert);
            }
            else
            {
                CreateMessage(message);
            }
            _unitOfWork.Save();
        }
        public IEnumerable<MessageDTO> GetByAdvertId(int? AdvertId)
        {
            var messages = _unitOfWork.Messages
                                      .GetQuryable()
                                      .Include(message => message.Author)
                                      .Where(message => message.AdvertId == AdvertId)
                                      .ToList();
            return MapFewModel(messages);
        }

        private void CreateResponse(Message message, Advert advert)
        {
            advert.IsActive = false;
            advert.InterestedUserId = message.AuthorId;
            advert.UpdatedAt = DateTime.Now;
            _unitOfWork.Adverts.Update(advert);
            _unitOfWork.Messages.Create(message);
        }

        private void CreateMessage(Message message)
        {
            _unitOfWork.Messages.Create(message);
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
