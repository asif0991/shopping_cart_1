using System;
using System.Collections.Generic;

#nullable disable

namespace Shopping_Cart.Models
{
    public partial class User
    {
        public User()
        {
            Carts = new HashSet<Cart>();
        }

        public int Id { get; set; }
        public string Name { get; set; }
        public string Mobile { get; set; }
        public string Address { get; set; }
        public string Email { get; set; }
        public bool? IsActive { get; set; }
        public string Password { get; set; }
        public string UserName { get; set; }

        public virtual ICollection<Cart> Carts { get; set; }
    }
}
