using PersonalSite.Context;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PersonalSite.ViewModels
{
    public class PostViewModel
    {
        public Guid PostId { get; set; }
        public string Title { get; set; }
        public string Content { get; set; }
        public DateTime Createdon { get; set; }
        public ICollection<Comment> Comments { get; set; }

        public Guid BlogId { get; set; }
    }
}
