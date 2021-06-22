using System;
using System.Collections.Generic;

#nullable disable

namespace Shopping_Cart.Models
{
    public partial class Department
    {
        public int Id { get; set; }
        public string DeptName { get; set; }
        public string DeptManager { get; set; }
    }
}
