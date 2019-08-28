﻿// <auto-generated />
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using Tiago.TesteWebmotors.Data.Contexto;

namespace Tiago.TesteWebmotors.Data.Migrations
{
    [DbContext(typeof(Context))]
    partial class ContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "2.2.6-servicing-10079")
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("Tiago.TesteWebmotors.Domain.Entidades.AnuncioWebMotors", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<int>("Ano");

                    b.Property<string>("Marca")
                        .IsRequired()
                        .HasColumnType("varchar(45)")
                        .HasMaxLength(45);

                    b.Property<string>("Modelo")
                        .IsRequired()
                        .HasColumnType("varchar(45)")
                        .HasMaxLength(45);

                    b.Property<string>("Observacao")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<int>("Quilometragem");

                    b.Property<string>("Versao")
                        .IsRequired()
                        .HasColumnType("varchar(45)")
                        .HasMaxLength(45);

                    b.HasKey("Id");

                    b.ToTable("tb_AnuncioWebMotors");
                });
#pragma warning restore 612, 618
        }
    }
}
