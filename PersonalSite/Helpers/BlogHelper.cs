﻿using Microsoft.EntityFrameworkCore;
using PersonalSite.Context;
using PersonalSite.Interface;
using PersonalSite.ViewModels;
using System.Collections.Generic;
using System.Linq;

namespace PersonalSite.Helpers
{
    public class BlogHelper : IBlog
    {
        private readonly BlogsContext _blogsContext;

        public BlogHelper(BlogsContext blogsContext)
        {
            _blogsContext = blogsContext;
        }

        public ICollection<Post> AddBlogPost()
        {
            var a = _blogsContext.Blogs.Include("Post").ToList();
            return null;
        }

        public BlogViewModel Get()
        {
            var model = new BlogViewModel();
            var blog = _blogsContext.Blogs
                .Include(a => a.Posts)
                .FirstOrDefault();

            model.AuthorId = blog.AuthorId;
            model.BlogId = blog.BlogId;
            model.Name = blog.Name;
            model.CreatedOn = blog.CreatedOn;
            model.Posts = blog.Posts
                .OrderByDescending(p => p.Createdon)
                .Take(3)
                .Select(a => new PostViewModel()
                {
                    BlogId = a.BlogId,
                    Comments = a.Comments,
                    Content = a.Content,
                    Createdon = a.Createdon,
                    PostId = a.PostId,
                    Title = a.Title
                }).ToList();

            return model;
        }
    }
}
