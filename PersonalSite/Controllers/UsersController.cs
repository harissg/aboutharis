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

  // POST: api/Users
  [HttpPost]
  [Route('api/v1/[controller]')]
  public IActionResult Post(UserViewModel model)
  {
returOk(_user.Get(model));
  }
 }
}
