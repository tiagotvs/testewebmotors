using AutoMapper;
using Tiago.TesteWebmotors.Domain.Entidades;
using Tiago.TesteWebmotors.App.Models;

namespace Tiago.TesteWebmotors.App.AutoMapper
{
    public class DomainToViewModelMappingProfile : Profile
    {
        public DomainToViewModelMappingProfile()
        {
            CreateMap<AnuncioWebMotors, AnuncioWebMotorsModel>();
        }
    }
}