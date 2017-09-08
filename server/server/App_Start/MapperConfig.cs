using AutoMapper;
using server.DAL.Entities;
using server.Models;
using Server.BLL.DTO;
using Server.DAL.Entities;
using Server.Models;

namespace Server
{

    public class MappingProfile : Profile
    {
        public MappingProfile()
        {
            CreateMap<User, UserDTO>().ReverseMap();
            CreateMap<UserViewModel, UserDTO>().ReverseMap(); 

            CreateMap<AdvertDTO, AdvertViewModel>().ReverseMap();
            CreateMap<Advert, AdvertDTO>().ReverseMap();

            CreateMap<MessageDTO, MessageViewModel>().ReverseMap();
            CreateMap<Message, MessageDTO>().ReverseMap();

            CreateMap<AddressDTO, AddressViewModel>().ReverseMap();
            CreateMap<Address, AddressDTO>().ReverseMap();

            CreateMap<AddressDTO, AddressViewModel>().ReverseMap();
            CreateMap<Address, AddressDTO>().ReverseMap();

            CreateMap<CountryDTO, CountryViewModel>().ReverseMap();
            CreateMap<Country, CountryDTO>().ReverseMap();

            CreateMap<CityDTO, CityViewModel>().ReverseMap();
            CreateMap<City, CityDTO>().ReverseMap();
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