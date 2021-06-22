using Microsoft.EntityFrameworkCore;
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

        public User AuthenticateUserProfile(string userName, string password)
        {
            User user = null;
            List<User> userFound = DBContext.Users.Where(x => x.UserName == userName && x.Password == password).ToList();
            if(userFound.Count > 0)
            {
                user = DBContext.Users.Find(userFound[0].Id);
            }
            return user;
        }

        public Shopping_CartContext DBContext
        {
            get { return Context as Shopping_CartContext; }
        }

    }
}
