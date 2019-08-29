using AutoMapper;
using Tiago.TesteWebmotors.App.Models;
using Tiago.TesteWebmotors.Domain.Entidades;

namespace Tiago.TesteWebmotors.App.AutoMapper
{
    public class ViewModelToDomainMappingProfile : Profile
    {
        public ViewModelToDomainMappingProfile()
        {
            CreateMap<AnuncioWebMotorsModel, AnuncioWebMotors>();
        }
    }
}