using Server.BLL.DTO;
using Server.BLL.Infrastructure;
using Server.DAL.Entities;
using System;
using System.Collections.Generic;
using System.Security.Claims;
using System.Threading.Tasks;

namespace Server.BLL.Interfaces
{
    public interface IUserService
    {
        void Create(UserDTO userDto);
        UserDTO FindByName(string name);
    }
}
