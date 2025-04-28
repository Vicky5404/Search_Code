import React from 'react';


const Navbar = () => {
  return (
    <nav className="flex items-center h-16 px-4">
      <img className="w-40" src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/fkheaderlogo_exploreplus-44005d.svg" alt="Logo" />
      
      <input className="ml-16 w-1/3 h-10 p-3 rounded-lg bg-gray-100" type="text" placeholder="Search For Products, Brands and More" />
     
     <div className='flex pl-11'>
      <div className="flex items-center  hover:bg-blue-600 rounded-lg h-10 w-24">
        <img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/profile-52e0dc.svg" alt="Login" className="w-8 h-8" />
        <p className="text-lg">Login</p>
      </div>
      <div className="flex items-center ml-11">
        <img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/header_cart-eed150.svg" alt="Cart" className="w-8 h-8" />
        <p className="text-lg">Cart</p>
      </div>
      <div className="flex items-center ml-11">
        <img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/Store-9eeae2.svg" alt="Become a Seller" className="w-8 h-8" />
        <p className="text-lg">Become a Seller</p>
      </div>
      <div className='flex items-center ml-11'>
       <img src='https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/header_3verticalDots-ea7819.svg' alt='dot'/>
      </div>
      </div>
    </nav>
  );
};

export default Navbar;
