using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PersonalSite.Context
{
    public class Author
    {
        public Guid AuthorId { get; set; }
        public string Name { get; set; }

        public Guid UserId { get; set; }
        public virtual User User { get; set; }
    }
}
