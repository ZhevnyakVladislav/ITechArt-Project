using Server.BLL.DTO;
using System.Collections.Generic;

namespace Server.BLL.Interfaces
{
    public interface IMessageService
    {
        void Create(MessageDTO message);
        IEnumerable<MessageDTO> GetByAdvertId(int? id);
    }
}
