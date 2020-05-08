using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using PersonalSite.Context;

[ApiController]
public class BlogsController : ControllerBase
{

    [HttpGet]
    [Route("api/v1/[controller]")]
    public IEnumerable<string> Get()
    {
        return new List<string>() { "First blog", "second blog" };
    }

    [HttpGet]
    [Route("api/v1/[controller]/posts")]
    public IEnumerable<string> GetBlogPosts(){
        return new List<string>() { "First post", "second post" };
    }
}