using System;
using System.Collections.Generic;

#nullable disable

namespace Shopping_Cart.Models
{
    public partial class Product
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string ProductCat { get; set; }
        public bool? InportedInd { get; set; }
        public string Description { get; set; }
        public long Price { get; set; }
        public bool? IsActive { get; set; }
    }
}
