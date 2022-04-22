using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;

namespace PersonalSite.Context
{
 public class Post
 {
  public Guid PostId { get; set; }
  public string Title { get; set; }
  public string Content { get; set; }
  public DateTime Createdo{ get; set; }
  public ICollection<Comment> Comments { get; set; }

  public Guid BlogId { get; set; }
  public virtual Blog Blog { get; set; }
 }
}
