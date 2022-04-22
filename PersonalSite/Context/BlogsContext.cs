using Microsoft.EntityFrameworkCore;

namespace PersonalSite.Context
{
 public class BlogsContext : DbContext
 {
  public BlogsContext(DbContextOptions<BlogsContext> options) : base(options)
  {
  }

  public DbSet<Blog> Blogs { get; set; }
  public DbSet<Author> Authors { get; set; }
  public DbSet<User> Users { get; set; }
  public DbSet<Post> Posts { get; set; }
  public DbSet<Comment> Comments { get; set; }

  protected override void OnModelCreating(ModelBuilder modelBuilder)
  {
modelBuilder.Entity<Blog>().ToTable('Blog');
modelBuilder.Entity<Author>().ToTable('Author');
modelBuilder.Entity<User>().ToTable('User');
modelBuilder.Entity<Post>().ToTable('Post');
modelBuilder.Entity<Comment>().ToTable('Comment');
  }
 }
}
