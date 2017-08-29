using Server.BLL.DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Server.BLL.Interfaces
{
    public interface IMessageService
    {
        void Create(MessageDTO message);
        IEnumerable<MessageDTO> GetByAdvertId(int? id);
    }
}
