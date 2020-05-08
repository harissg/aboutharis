using System;

namespace PersonalSite.Context
{
    public class Post
    {
        public Guid PostId { get; set; }

        public string Title { get; set; }

        public string Content { get; set; }

        public DateTime Createdon { get; set; }

        public Guid BlogId { get; set; }

        public Guid AuthorId { get; set; }

        public virtual Blog Blog { get; set; }
        public virtual Author Author { get; set; }
    }
}
