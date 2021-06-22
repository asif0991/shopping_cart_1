using System;
using System.Collections.Generic;

#nullable disable

namespace Shopping_Cart.Models
{
    public partial class Cart
    {
        public int Id { get; set; }
        public int? UserId { get; set; }
        public string CartDetails { get; set; }
        public bool? IsActive { get; set; }

        public virtual User User { get; set; }
    }
}
