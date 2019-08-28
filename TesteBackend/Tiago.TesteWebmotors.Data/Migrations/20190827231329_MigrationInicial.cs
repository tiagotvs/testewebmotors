using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Tiago.TesteWebmotors.Data.Migrations
{
    public partial class MigrationInicial : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "tb_AnuncioWebMotors",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Marca = table.Column<string>(type: "varchar(45)", maxLength: 45, nullable: false),
                    Modelo = table.Column<string>(type: "varchar(45)", maxLength: 45, nullable: false),
                    Versao = table.Column<string>(type: "varchar(45)", maxLength: 45, nullable: false),
                    Ano = table.Column<int>(nullable: false),
                    Quilometragem = table.Column<int>(nullable: false),
                    Observacao = table.Column<string>(type: "text", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_tb_AnuncioWebMotors", x => x.Id);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "tb_AnuncioWebMotors");
        }
    }
}
