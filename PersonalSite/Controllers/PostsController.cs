using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using PersonalSite.Context;
using PersonalSite.Interface;

namespace PersonalSite.Controllers
{
 [ApiController]
 public class PostsController : ControllerBase
 {
  private readonly IPost _post;
  public PostsController(IPost post)
  {
_post = post;
  }

  [HttpGet]
  [Route('api/v1/[controller]')]
  public IActionResult Get(int limit)
  {
var posts = _post.Get(limit);

if (posts != null && posts.Count > 0)
{
 returOk(posts);
}
else
{
 returNotFound('Unable to find any posts');
}
  }

  [HttpGet]
  [Route('api/v1/[controller]/{id}')]
  public IActionResult Get(Guid id)
  {
var post = _post.GetById(id);

if (post != null)
{
 returOk(post);
}
else
{
 returNotFound($'Post : {id} not found.');
}
  }

  [HttpPost]
  [Route('api/v1/[controller]')]
  public IActionResult Add(Post model)
  {
_post.Add(model);
returCreated($'/post?id={ model.PostId}', model);
  }

  [HttpPost]
  [Route('api/v1/[controller]/{id}/comments')]
  public IActionResult Add(Comment model)
  {
_post.AddComment(model);
returCreated('', model.CommentId);
  }

  //TO DO 
  [HttpDelete]
  [Route('api/v1/[controller]/{id}')]
  public IActionResult Delete(int id)
  {
returnull;
  }

  [HttpPut]
  [Route('api/v1/[controller]/{id}')]
  public IActionResult Update(Post model)
  {
this._post.Update(model);
returOk();
  }
 }
}
