using AutoMapper;
using Server.BLL.DTO;
using Server.BLL.Interfaces;
using Server.DAL.Entities;
using Server.DAL.Interfaces;
using System;
using System.Collections.Generic;

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
            if (advert.InterestedUserId == null && advert.IsActive)
            {
                advert.IsActive = false;
                advert.InterestedUserId = model.AuthorId;
            }
            var message = MapOneModel(model);
            message.CreatedAt = DateTime.Now;
            advert.UpdatedAt = DateTime.Now;
            _unitOfWork.Messages.Create(message);
            _unitOfWork.Adverts.Update(advert);
            _unitOfWork.Save();
        }
        public IEnumerable<MessageDTO> GetByAdvertId(int? AdvertId)
        {
            var messages = MapFewModel(_unitOfWork.Messages.FindFew(item => item.AdvertId == AdvertId));
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
