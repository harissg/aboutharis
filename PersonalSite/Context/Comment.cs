using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PersonalSite.Context
{
    public class Comment
    {
        public Guid CommentId { get; set; }
        public string Content { get; set; }

        public Guid PostId { get; set; }
        public Post Post { get; set; }
    }
}
