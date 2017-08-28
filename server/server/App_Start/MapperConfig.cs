using AutoMapper;
using server.Models;
using Server.BLL.DTO;
using Server.DAL.Entities;
using Server.Models;
using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace server.App_Start
{

    public class MappingProfile : Profile
    {
        public MappingProfile()
        {
            CreateMap<User, UserDTO>().ReverseMap();
            CreateMap<UserViewModel, UserDTO>().ReverseMap();

            CreateMap<AdvertDTO, AdvertViewModel>().ReverseMap();
            CreateMap<Advert, AdvertDTO>().ReverseMap();
        }
    }

    public static class MapperConfig
    {
        public static IMapper GetMapper()
        {
            var mapperConfiguration = new MapperConfiguration(cfg =>
            {
                cfg.AddProfile(new MappingProfile());
            });
            
            return mapperConfiguration.CreateMapper();
        }
    }
}