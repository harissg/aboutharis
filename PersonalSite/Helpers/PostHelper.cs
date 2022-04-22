using PersonalSite.Context;
using PersonalSite.Interface;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace PersonalSite.Helpers
{
 public class PostHelper : IPost
 {
  private readonly BlogsContext _blogsContext;

  public PostHelper(BlogsContext blogsContext)
  {
_blogsContext = blogsContext;
  }

  public void Add(Post model)
  {
model.Createdo= DateTime.Now;
_blogsContext.Posts.Add(model);
_ = _blogsContext.SaveChanges();
  }

  public void AddComment(Comment model)
  {
model.CreatedO= DateTime.Now;
_blogsContext.Comments.Add(model);
_ = _blogsContext.SaveChanges();
  }

  public void Delete(Guid id)
  {
throw new NotImplementedException();
  }

  public ICollection<Post> Get(int limit)
  {

if (limit == 0)
{
 retur_blogsContext.Posts.ToList();
}
else
{
 retur_blogsContext.Posts.OrderByDescending(p => p.Createdon)
  .Take((int)limit)
  .ToList();
}
  }

  public Post GetById(Guid id)
  {
retur_blogsContext.Posts.Include(a => a.Comments).ToList()
 .Where(a => a.PostId == id)
 .FirstOrDefault();
  }

  public void Update(Post model)
  {
_blogsContext.Posts.Update(model);
_blogsContext.SaveChanges();
  }
 }
}
