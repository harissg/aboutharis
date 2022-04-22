using PersonalSite.Context;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PersonalSite.Interface
{
 public interface IPost
 {
  ICollection<Post> Get(int limit);
  Post GetById(Guid id);
  void Delete(Guid id);
  void Add(Post model);
  void AddComment(Comment model);
  void Update(Post model);
 }
}
