using System;
using System.Collections.Generic;
using System.Text;
using Tiago.TesteWebmotors.App.Models;

namespace Tiago.TesteWebmotors.App.Interfaces
{
    public interface IAnuncioWebmotors : IDisposable
    {
        void Register(AnuncioWebMotorsModel anuncioWebMotorsModel);
        IEnumerable<AnuncioWebMotorsModel> GetAll();
        AnuncioWebMotorsModel GetById(int id);
        void Update(AnuncioWebMotorsModel anuncioWebMotorsModel);
        void Remove(int id);
    }
}
