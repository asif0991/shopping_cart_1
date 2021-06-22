using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Shopping_Cart.Repository;
using Shopping_Cart.Models;

namespace Shopping_Cart.Controllers
{
    public class ProductController : Controller
    {

        private readonly UnitOfWork _repo;

        public ProductController(Shopping_CartContext context)
        {
            _repo = new UnitOfWork(context);
        }
        public IActionResult Index()
        {
            //List<Product> prod = 
            IEnumerable<User> allUsers = _repo.Users.GetAll();
            return View();
        }
    }
}
