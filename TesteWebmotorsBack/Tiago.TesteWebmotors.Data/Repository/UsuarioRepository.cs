using System;
using System.Collections.Generic;
using System.Text;
using Tiago.TesteWebmotors.Data.Contexto;
using Tiago.TesteWebmotors.Domain.Entidades;
using Tiago.TesteWebmotors.Domain.Interfaces;

namespace Tiago.TesteWebmotors.Data.Repository
{
    public class AnuncioWebMotorsRepository : Repository<AnuncioWebMotors>, IAnuncioWebMotorsRepository
    {
        public AnuncioWebMotorsRepository(Context context) : base(context)
        {

        }
    }
}
