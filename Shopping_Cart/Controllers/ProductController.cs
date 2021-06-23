using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Shopping_Cart.Repository;
using Shopping_Cart.Models;
using Microsoft.AspNetCore.Http;

namespace Shopping_Cart.Controllers
{
    public class ProductController : Controller
    {

        private readonly UnitOfWork _repo;

        const User UserInfo = null;
        public ProductController(Shopping_CartContext context)
        {
            _repo = new UnitOfWork(context);
        }
        [HttpGet]
        public IActionResult Index()
        {
            //List<Product> prod = 

            IEnumerable<User> allUsers = _repo.Users.GetAll();

            return View();
        }

        [HttpGet]
        public ActionResult CheckUser()
        {
            User userFound = new User();
            int UserId = 0;
            var id = HttpContext.Session.GetInt32("Id");
            if (id != null)
                UserId = (int)id;

            if (UserId > 0)
            {
                userFound = _repo.Users.Get(UserId);
            }
            return Json(userFound);
        }

        [HttpGet]
        public ActionResult Login(string userName, string password)
        {
            User userFound = _repo.Users.AuthenticateUserProfile(userName, password);
            if (userFound.Id > 0)
            {
                HttpContext.Session.SetInt32("Id", userFound.Id);
            }

            return Json(userFound);
        }

        [HttpGet]
        public ActionResult GetAllProducts(string userName, string password)
        {
            List<Product> allProducts = _repo.Products.GetAll().ToList();
            return Json(allProducts);
        }

        [HttpGet]
        public ActionResult GetProducts(int id)
        {
            Product Product = _repo.Products.Get(id);
            return Json(Product);
        }

        [HttpGet]
        public ActionResult UpdateCart(int id, Cart _cart)
        {
            Cart cartResponse = new Cart();
            Cart cart = _repo.Carts.Get(id);

            if (cart != null && cart.Id > 0)
            {
                _repo.Carts.Add(_cart);
                _repo.Complete();
               
            }
            else if (cart != null && cart.CartDetails != null)
            {
                Cart _details = new Cart(); ;
                _details.Id = cart.Id;
                _details.CartDetails = cart.CartDetails;
                _repo.Complete();
                
            }
            cartResponse = _repo.Carts.Get(id);
            return Json(cartResponse);
        }
    }
}
