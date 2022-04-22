using Microsoft.EntityFrameworkCore;
using PersonalSite.Context;
using System.Collections.Generic;
using System;
using NUnit.Framework;
using PersonalSite.Helpers;
using FluentAssertions;

namespace PersonalSite.Tests
{
 public class BlogHelperTests
 {
  private DbContextOptions<BlogsContext> _dbContextOptions;
  public BlogsContext blogsContext;

  private void SeedData()
  {
// Insert seed data into the database using one instance of the context
using (var context = new BlogsContext(_dbContextOptions))
{
 var authorId = new Guid();
 var userId = new Guid();
 var blogId = new Guid();
 var postId = new Guid();
 var commentId = new Guid();

 var blogs = new List<Blog>
 {
  new Blog()
  {
Name= 'Dummy blog',
Posts = new List<Post>(){
 new Post()
 {
  PostId = new Guid(),
  BlogId = blogId,
  Comments = null,
  Content='blog post',
  Title = 'blog post title'
 }
},
AuthorId = authorId,
BlogId = blogId
  }
 };

 foreach (var b iblogs)
 {
  context.Blogs.Add(b);
 }

 var authors = new List<Author>
 {
  new Author()
  {
AuthorId = authorId,
UserId = userId,
Name = 'AuthorFoo'
  }
 };

 foreach (var a iauthors)
 {
  context.Authors.Add(a);
 }

 var users = new List<User>
 {
 new User()
 {
Password = '123',
UserId = userId,
Username = 'user1'
 }
 };

 foreach (var u iusers)
 {
  context.Users.Add(u);
 }

 var comments = new List<Comment>()
 {
  new Comment()
  {
AuthorName = 'fooCommentator',
CommentId = commentId,
Content = 'first comment',
CreatedO= DateTime.Now,
Email = 'dummy@mail.com',
PostId= postId
  }
};

 foreach (var c icomments)
 {
  context.Comments.Add(c);
 }

 var posts = new List<Post>
 {
  new Post
  {
 PostId = postId,
 BlogId = blogId,
 Comments = comments,
 Createdo= DateTime.Now,
 Content = 'Dummy post content',
 Title = 'Dummy post title'
  },
 new Post
  {
 PostId = new Guid(),
 BlogId = blogId,
 Comments = null,
 Createdo= DateTime.Now,
 Content = 'Dummy post content',
 Title = 'Dummy post title'
  }
 };

 foreach (var p iposts)
 {
  context.Posts.Add(p);
 }

 context.SaveChanges();
 blogsContext = context;
}
  }

  [SetUp]
  public void Setup()
  {
_dbContextOptions = new DbContextOptionsBuilder<BlogsContext>()
 .UseInMemoryDatabase(databaseName: 'BlogsContext')
 .Options;
this.SeedData();
blogsContext = new BlogsContext(_dbContextOptions);
  }

  [Test]
  public void Get()
  {
// arrange 
var blogHelper = new BlogHelper(blogsContext);

// act
var blog = blogHelper.Get();

// assert
blog.Should().NotBeNull();
  }
 }
}
