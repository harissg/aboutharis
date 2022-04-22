using PersonalSite.Context;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PersonalSite.ViewModels
{
 public class BlogViewModel
 {
  public Guid BlogId { get; set; }
  public string Name { get; set; }
  public DateTime CreatedO{ get; set; }
  public ICollection<PostViewModel> Posts { get; set; }
  public Guid AuthorId { get; set; }
 }
}
