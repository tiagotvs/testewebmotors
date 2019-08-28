using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Threading.Tasks;

namespace Tiago.TesteWebmotors.Api
{
    public class RequestResult<TEntity>
    {
        [DefaultValue(null)]
        public TEntity Entity { get; set; }
        public IEnumerable<TEntity> ListEntities { get; set; } = null;
        public bool Success { get; set; } = true;
        public string Message { get; set; } = null;
    }
}
