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
        public ICollection<Post> Get(int limit)
        {
            return _post.Get(limit);
        }

        [HttpGet]
        [Route("api/v1/[controller]/{id}")]
        public Post Get(Guid id)
        {
            return _post.GetById(id);
        }

        [HttpPost]
        [Route("api/v1/[controller]/posts")]
        public void Add(Post model)
        {
            _post.Add(model);
        }

        [HttpPost]
        [Route("api/v1/[controller]/posts/{id}/comments")]
        public void Add(Comment model)
        {
            _post.AddComment(model);
        }

        [HttpDelete]
        [Route("api/v1/[controller]/{id}")]
        public void Delete(int id)
        {

        }
    }
}
