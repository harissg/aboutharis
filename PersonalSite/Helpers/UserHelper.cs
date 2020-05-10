using PersonalSite.Context;
using PersonalSite.Interface;
using PersonalSite.ViewModels;
using System.Linq;

namespace PersonalSite.Helpers
{
    public class UserHelper : IUser
    {
        private readonly BlogsContext _blogsContext;

        public UserHelper(BlogsContext blogsContext)
        {
            _blogsContext = blogsContext;
        }

        public UserViewModel Get(UserViewModel model)
        {
            return _blogsContext.Users
            .Where(u => u.Username == model.Username && u.Password == model.Password)
            .Select(a => new UserViewModel()
            {
                Username = a.Username
            }).FirstOrDefault();
        }
    }
}
