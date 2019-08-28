using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Text;
using Tiago.TesteWebmotors.Domain.Entidades;

namespace Tiago.TesteWebmotors.Data.EntityConfig
{
    public class AnuncioWebMotorsConfig : IEntityTypeConfiguration<AnuncioWebMotors>
    {
        public void Configure(EntityTypeBuilder<AnuncioWebMotors> builder)
        {
            builder.ToTable("tb_AnuncioWebMotors");
            builder.HasKey(c => c.Id);
            builder.Property(c => c.Ano).IsRequired(true);
            builder.Property(c => c.Marca).HasColumnType("varchar(45)").HasMaxLength(45).IsRequired(true);
            builder.Property(c => c.Modelo).HasColumnType("varchar(45)").HasMaxLength(45).IsRequired(true);
            builder.Property(c => c.Observacao).HasColumnType("text").IsRequired(true);
            builder.Property(c => c.Quilometragem).IsRequired(true);
            builder.Property(c => c.Versao).HasColumnType("varchar(45)").HasMaxLength(45).IsRequired(true);
        }
    }
}
