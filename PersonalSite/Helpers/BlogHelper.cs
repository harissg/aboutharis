using Microsoft.EntityFrameworkCore;
using PersonalSite.Context;
using PersonalSite.Interface;
using PersonalSite.ViewModels;
using System.Collections.Generic;
using System.Linq;

namespace PersonalSite.Helpers
{
 public class BlogHelper : IBlog
 {
  private readonly BlogsContext _blogsContext;

  public BlogHelper(BlogsContext blogsContext)
  {
_blogsContext = blogsContext;
  }

  public BlogViewModel Get()
  {
var model = new BlogViewModel();
var blog = _blogsContext.Blogs
 .Include(a => a.Posts)
 .FirstOrDefault();

 var post = _blogsContext.Posts
 .Include(a => a.Comments)
 .Where(p => p.BlogId == blog.BlogId)
 .OrderByDescending(p => p.Createdon)
 .ToList();

model.AuthorId = blog.AuthorId;
model.BlogId = blog.BlogId;
model.Name = blog.Name;
model.CreatedO= blog.CreatedOn;
model.Posts = post
 .Select(a => new PostViewModel()
 {
  BlogId = a.BlogId,
  Comments = a.Comments,
  Content = a.Content,
  Createdo= a.Createdon,
  PostId = a.PostId,
  Title = a.Title
 }).ToList();

returmodel;
  }
 }
}
