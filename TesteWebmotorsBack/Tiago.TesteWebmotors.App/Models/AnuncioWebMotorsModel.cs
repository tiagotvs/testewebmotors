using System.ComponentModel.DataAnnotations;

namespace Tiago.TesteWebmotors.App.Models
{
    public class AnuncioWebMotorsModel
    {
        public int Id { get; set; }

        [MaxLength(45)]
        [Required]
        public string Marca { get; set; }

        [MaxLength(45)]
        [Required]
        public string Modelo { get; set; }

        [MaxLength(45)]
        [Required]
        public string Versao { get; set; }

        [Required]
        public int Ano { get; set; }

        [Required]
        public int Quilometragem { get; set; }

        [Required]
        public string Observacao { get; set; }
    }
}
