using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Shopping_Cart.Repository
{
    interface IUnitOfWork : IDisposable
    {
        
        IProductRepository Products { get; }
        ICategoryRepository Categories { get; }
        ICartRepository Carts { get; }
        int Complete();
    }
}
