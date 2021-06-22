using Shopping_Cart.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Shopping_Cart.Repository
{
    public class UnitOfWork : IUnitOfWork
    {

        private readonly Shopping_CartContext _context;


        public UnitOfWork(Shopping_CartContext context)
        {
            _context = context;
            Users = new UserRepository(_context);
            Products = new ProductRepository(_context);
            Categories = new CategoryRepository(_context);
            Carts = new CartRepository(_context);
        }

        public IUserRepository Users { get; private set; }
        public IProductRepository Products { get; private set; }

        public ICategoryRepository Categories { get; private set; }

        public ICartRepository Carts { get; private set; }

        public int Complete()
        {
            return _context.SaveChanges();
        }

        public void Dispose()
        {
            _context.Dispose();
        }

        public IUserRepository GetUsers()
        {
            throw new NotImplementedException();
        }
    }
}
