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
                new User{UserId = userId, Password = "foo", Username="bar"},
                };

            foreach (User u in users)
            {
                context.Users.Add(u);
            }
            context.SaveChanges();

            var authorId = Guid.NewGuid();
            var authors = new Author[]
               {
                    new Author{Name = "FooBar", AuthorId= authorId, UserId = userId}
               };

            foreach (Author a in authors)
            {
                context.Authors.Add(a);
            }
            context.SaveChanges();


            var blogId = Guid.NewGuid();
            var blogs = new Blog[]
                {
                     new Blog{ BlogId = blogId, Name="averageDev", AuthorId = authorId, CreatedOn = DateTime.Now}
                };

            foreach (Blog b in blogs)
            {
                context.Blogs.Add(b);
            }
            context.SaveChanges();

            var postId = Guid.NewGuid();
            var posts = new Post[]
            {
                new Post{PostId = postId, BlogId = blogId, Content = "content", Title ="dummy", Createdon = DateTime.Now }
            };

            foreach (Post p in posts)
            {
                context.Posts.Add(p);
            }
            context.SaveChanges();

            var commentId = Guid.NewGuid();
            var comments = new Comment[]
            {
                new Comment{CommentId  = commentId, PostId = postId, Content = "first comment", CreatedOn = DateTime.Now, AuthorName = "fooauthor", Email = "foo@email.com" }
            };

            foreach (Comment c in comments)
            {
                context.Comments.Add(c);
            }
            context.SaveChanges();

        }
    }
}