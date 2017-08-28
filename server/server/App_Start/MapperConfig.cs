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
            CreateMap<Advert, AdvertDTO>().ReverseMap();
            CreateMap<AdvertViewModel, AdvertDTO>().ReverseMap();
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

            var mapper = mapperConfiguration.CreateMapper();
            return mapper;
            //Mapper.Initialize(cfg => cfg.CreateMap<User, UserDTO>());
            //Mapper.
            //return Mapper;
            //Mapper.Initialize(cfg => cfg.CreateMap<UserDTO, User>());

            
            //Mapper.Initialize(cfg => cfg.CreateMap<UserDTO, UserViewModel>());
            //Mapper.Initialize(cfg => cfg.CreateMap<UserViewModel, UserDTO>());


            //Mapper.Initialize(cfg => cfg.CreateMap<Advert, AdvertDTO>());
            //Mapper.Initialize(cfg => cfg.CreateMap<AdvertDTO, Advert>());


            //Mapper.Initialize(cfg => cfg.CreateMap<AdvertDTO, AdvertViewModel>());
            //Mapper.Initialize(cfg => cfg.CreateMap<AdvertViewModel, AdvertDTO>());

        }
    }
}