using Microsoft.AspNetCore.Mvc;
using PersonalSite.Interface;
using PersonalSite.ViewModels;
using System.Collections.Generic;

namespace PersonalSite.Controllers
{
    [ApiController]
    public class UsersController : ControllerBase
    {
        private readonly IUser _user;
        public UsersController(IUser user)
        {
            _user = user;
        }
        // GET: api/Users
        [HttpGet]
        [Route("api/v1/[controller]")]
        public IEnumerable<string> Get()
        {
            return new string[] { "", "" };
        }

        // GET: api/Users/5
        [HttpGet]
        [Route("api/v1/[controller]")]
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/Users
        [HttpPost]
        [Route("api/v1/[controller]")]
        public IActionResult Post(UserViewModel model)
        {
            return Ok(_user.Get(model));
        }
    }
}
