using PersonalSite.ViewModels;
namespace PersonalSite.Interface
{
    public interface IUser
    {
        UserViewModel Get(UserViewModel model);
    }
}
