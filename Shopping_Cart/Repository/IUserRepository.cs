using Shopping_Cart.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Shopping_Cart.Repository
{
    public interface IUserRepository : IRepository<User>
    {
        User AuthenticateUserProfile(string userName,string password);
    }
}
