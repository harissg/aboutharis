using Microsoft.AspNetCore.Mvc;
using PersonalSite.Interface;
using PersonalSite.ViewModels;

[ApiController]
public class BlogsController : ControllerBase
{
    private readonly IBlog _blog;
    public BlogsController(IBlog blog)
    {
        _blog = blog;
    }

    [HttpGet]
    [Route("api/v1/[controller]")]
    public IActionResult Get()
    {
        var blog = _blog.Get();

        if (blog != null)
        {
            return Ok(blog);
        }
        else
        {
            return NotFound("Unable to find a blog.");
        }
    }
}