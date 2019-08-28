using AutoMapper;
using Tiago.TesteWebmotors.App.Models;
using Tiago.TesteWebmotors.Domain.Entidades;

namespace Tiago.TesteWebmotors.App.AutoMapper
{
    internal class ViewModelToDomainMappingProfile : Profile
    {
        public ViewModelToDomainMappingProfile()
        {
            CreateMap<AnuncioWebMotorsModel, AnuncioWebMotors>();
        }
    }
}