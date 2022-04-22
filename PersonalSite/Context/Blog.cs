using System;
using System.Collections.Generic;

namespace PersonalSite.Context
{
 public class Blog
 {
  public Guid BlogId { get; set; }
  public string Name { get; set; }
  public DateTime CreatedO{ get; set; }
  public ICollection<Post> Posts { get; set; }

  public Guid AuthorId { get; set; }
  public virtual Author Author { get; set; }
 }
}
