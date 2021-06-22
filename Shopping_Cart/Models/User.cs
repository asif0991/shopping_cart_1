using System;
using System.Collections.Generic;

#nullable disable

namespace Shopping_Cart.Models
{
    public partial class User
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Mobile { get; set; }
        public string Address { get; set; }
        public string Email { get; set; }
        public bool? IsActive { get; set; }
    }
}
