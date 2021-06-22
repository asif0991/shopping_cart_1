

using Shopping_Cart.Models;

namespace Shopping_Cart.Repository
{
    public class CartRepository : Repository<Cart>, ICartRepository
    {
        public CartRepository(Shopping_CartContext context) : base(context)
        {

        }

    }
}
