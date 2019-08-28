using AutoMapper;
using AutoMapper.QueryableExtensions;
using System;
using System.Collections.Generic;
using System.Text;
using Tiago.TesteWebmotors.App.Interfaces;
using Tiago.TesteWebmotors.App.Models;
using Tiago.TesteWebmotors.Domain.Entidades;
using Tiago.TesteWebmotors.Domain.Interfaces;

namespace Tiago.TesteWebmotors.App.Services
{
    public class AnuncioWebmotors : IAnuncioWebmotors
    {
        private readonly IMapper _mapper;
        private readonly IAnuncioWebMotorsRepository _anuncioWebMotorsRepository;

        public AnuncioWebmotors(IMapper mapper, IAnuncioWebMotorsRepository anuncioWebMotorsRepository)
        {
            _mapper = mapper;
            _anuncioWebMotorsRepository = anuncioWebMotorsRepository;
        }

        public void Dispose()
        {
            GC.SuppressFinalize(this);
        }

        public IEnumerable<AnuncioWebMotorsModel> GetAll()
        {
            return _anuncioWebMotorsRepository.GetAll().ProjectTo<AnuncioWebMotorsModel>();
        }

        public AnuncioWebMotorsModel GetById(int id)
        {
            return _mapper.Map<AnuncioWebMotorsModel>(_anuncioWebMotorsRepository.GetById(id));
        }

        public void Register(AnuncioWebMotorsModel anuncioWebMotorsModel)
        {
            _anuncioWebMotorsRepository.Add(_mapper.Map<AnuncioWebMotors>(anuncioWebMotorsModel));
        }

        public void Remove(int id)
        {
            _anuncioWebMotorsRepository.Remove(id);
        }

        public void Update(AnuncioWebMotorsModel anuncioWebMotorsModel)
        {
            _anuncioWebMotorsRepository.Update(_mapper.Map<AnuncioWebMotors>(anuncioWebMotorsModel));
        }
    }
}
