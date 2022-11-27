using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace AmdarisHelper.Migrations
{
    /// <inheritdoc />
    public partial class AddCompleteMigrationEntityMigration : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "CompleteMigrations",
                columns: table => new
                {
                    CompleteMigrationId = table.Column<string>(type: "nvarchar(450)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_CompleteMigrations", x => x.CompleteMigrationId);
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "CompleteMigrations");
        }
    }
}
