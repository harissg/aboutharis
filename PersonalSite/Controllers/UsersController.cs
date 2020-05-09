using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using PersonalSite.Interface;
using PersonalSite.ViewModels;

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
        public UserViewModel Post(UserViewModel model)
        {
            return _user.Get(model);
        }

        // PUT: api/Users/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }
    }
}
