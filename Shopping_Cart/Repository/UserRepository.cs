using Shopping_Cart.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Shopping_Cart.Repository
{
    public class UserRepository : Repository<User>, IUserRepository
    {
        
        public UserRepository(Shopping_CartContext context) : base(context)
        {
          
        }
  
    }
}
