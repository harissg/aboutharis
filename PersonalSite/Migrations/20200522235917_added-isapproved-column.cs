using Microsoft.EntityFrameworkCore.Migrations;

namespace PersonalSite.Migrations
{
 public partial class addedisapprovedcolum: Migration
 {
  protected override void Up(MigrationBuilder migrationBuilder)
  {
migrationBuilder.AddColumn<bool>(
 name: 'IsApproved',
 table: 'Comment',
 nullable: false,
 defaultValue: false);
  }

  protected override void Down(MigrationBuilder migrationBuilder)
  {
migrationBuilder.DropColumn(
 name: 'IsApproved',
 table: 'Comment');
  }
 }
}
