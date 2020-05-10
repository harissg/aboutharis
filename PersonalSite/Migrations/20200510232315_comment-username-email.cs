using Microsoft.EntityFrameworkCore.Migrations;

namespace PersonalSite.Migrations
{
    public partial class commentusernameemail : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "AuthorName",
                table: "Comment",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Email",
                table: "Comment",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "AuthorName",
                table: "Comment");

            migrationBuilder.DropColumn(
                name: "Email",
                table: "Comment");
        }
    }
}
