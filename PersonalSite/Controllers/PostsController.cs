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
        [Route("api/v1/[controller]")]
        public IActionResult Get(int limit)
        {
            var posts = _post.Get(limit);

            if (posts != null && posts.Count > 0)
            {
                return Ok(posts);
            }
            else
            {
                return NotFound("Unable to find any posts");
            }
        }

        [HttpGet]
        [Route("api/v1/[controller]/{id}")]
        public IActionResult Get(Guid id)
        {
            var post = _post.GetById(id);

            if (post != null)
            {
                return Ok(post);
            }
            else
            {
                return NotFound($"Post : {id} not found.");
            }
        }

        [HttpPost]
        [Route("api/v1/[controller]")]
        public IActionResult Add(Post model)
        {
            _post.Add(model);
            return Created($"/post?id={ model.PostId}", model);
        }

        [HttpPost]
        [Route("api/v1/[controller]/{id}/comments")]
        public IActionResult Add(Comment model)
        {
            _post.AddComment(model);
            return Created("", model.CommentId);
        }

        //TO DO 
        [HttpDelete]
        [Route("api/v1/[controller]/{id}")]
        public IActionResult Delete(int id)
        {
            return null;
        }

        [HttpPut]
        [Route("api/v1/[controller]/{id}")]
        public IActionResult Update(Post model)
        {
            this._post.Update(model);
            return Ok();
        }
    }
}
