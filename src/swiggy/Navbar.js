import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div class="flex w-full h-20 items-center px-10">
        
        <img class='w-14 h-14 ' src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAASFBMVEVHcEz/UQD/UgD/UwH/UwH/UwD/UgD/UgD/UwD/TwD/UwH/SwD/QQD/nX//uKL/////18n/9/P/lHP/7uf/YCT/fFH/x7X/TwBtF0izAAAAGHRSTlMAO4a02en4/4cYz////////////////xfHO/5dAAAA40lEQVR4AWzQURKDIAxF0SCQtIIgatz/UquYAO30/N55gsDNTNZ5RKoQvbMvA4/3TH/M79qQ/sK7DrtwGbYAhlSkJaWFIikDU5ulXKU2nsDqbs1i1a0FJ+3ZlbqV6sDTo9S47flyUOUBqeI8xO05FiWGReL9gcIa6Tsy8xH1vho5N2U9WpRacjdG/RV1xhbF0SPTbwzLeinyQhKRRNxS2s77RL0sSpRTzyQnSvSkwp73PRdqPLgeWZ9OOLDUxFM+Kiy8aLAXGkxgqAvMgToDMI91bDPAZ7iTpjj+RI0jOzCBswMA+LEbQ3WL//0AAAAASUVORK5CYII='/>
         <h3 class="pl-11 text-x underline font-bold">Other</h3>
         <div class="flex ml-auto space-x-6 p-28 text-xl font-medium">
        <Link to="/SwiggyCorporate">&#9873; Swiggy Corporate</Link>
        <Link class='pl-4' to="/Search">Search</Link>
        <Link class='pl-4' to="/Offers">Offers</Link>
        <Link  class='pl-4'to="/Help">Help</Link>
        <Link  class='pl-4'to="/SignIn">Sign In</Link>
        <Link class='pl-4' to="/Cart">Cart</Link>
        </div>
    </div>
  )
}

export default Navbar
