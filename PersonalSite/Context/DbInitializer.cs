using PersonalSite.Context;
using System;
using System.Linq;

namespace PersonalSite.Context
{
    public static class DbInitializer
    {
        public static void Initialize(BlogsContext context)
        {
            context.Database.EnsureCreated();


            if (context.Blogs.Any())
            {
                return;   // DB has been seeded
            }

            var userId = Guid.NewGuid();
            var users = new User[]
                {
                new User{UserId = userId, Password = "@ver@geDev*", Username="harissg"},
                };

            foreach (User u in users)
            {
                context.Users.Add(u);
            }
            context.SaveChanges();

            var authorId = Guid.NewGuid();
            var authors = new Author[]
               {
                    new Author{Name = "Haris Gillani", AuthorId= authorId, UserId = userId}
               };

            foreach (Author a in authors)
            {
                context.Authors.Add(a);
            }
            context.SaveChanges();


            var blogId = Guid.NewGuid();
            var blogs = new Blog[]
                {
                     new Blog{ BlogId = blogId, Name="averageDev"}
                };

            foreach (Blog b in blogs)
            {
                context.Blogs.Add(b);
            }
            context.SaveChanges();

            var posts = new Post[]
            {
                new Post{PostId = Guid.NewGuid(), BlogId = blogId, AuthorId = authorId,Content = "content", Title ="dummy" }
            };

            foreach (Post p in posts)
            {
                context.Posts.Add(p);
            }
            context.SaveChanges();
        }
    }
}