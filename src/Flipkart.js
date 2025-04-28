// import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
// import Card from "./component/card";
import Navbar from './component_flipkart/navbar';
import MainSwiggyCard from './component_flipkart/MainSwiggyCard';
import Footer from './component_flipkart/Footer';
// import Review from './component_flipkart/Review';
// import Homepage from './pages/Homepage';
import Carousel from './component_flipkart/Carousel';
import Electronics from './component_flipkart/Electronics';
import Moreproduct from './component_flipkart/Moreproduct';

function App() {


return (
  <div>
      <Navbar/>
    
    <div class='flex ml-1 mr-1 text-center'>
      
      <MainSwiggyCard img_url={'https://rukminim2.flixcart.com/flap/96/96/image/29327f40e9c4d26b.png?q=100'} productName={'Kilos'}/>
      <MainSwiggyCard img_url={'https://rukminim2.flixcart.com/flap/96/96/image/22fddf3c7da4c4f4.png?q=100'} productName={'Mobiles'}/>
      <MainSwiggyCard img_url={'https://rukminim2.flixcart.com/fk-p-flap/96/96/image/0139228b2f7eb413.jpg?q=100'} productName={'Appliances'}/>
      <MainSwiggyCard img_url={'https://rukminim2.flixcart.com/flap/96/96/image/71050627a56b4693.png?q=100'} productName={'Flight Booking'}/>
      <MainSwiggyCard img_url={'https://img.freepik.com/free-photo/high-fashion-portrait-young-beautiful-brunette-woman-wearing-nice-trendy-blue-suit-sexy-fashion-model-posing-studio-fashionable-female-isolated-light-pink_158538-22176.jpg?ga=GA1.1.1005156087.1733204697&semt=ais_hybrid'} productName={'Fashion'}/>
      <MainSwiggyCard img_url={'https://img.freepik.com/premium-photo/close-up-electric-lamp-against-white-background_1048944-25221461.jpg?ga=GA1.1.1005156087.1733204697&semt=ais_hybrid'} productName={'Electronics'}/>
      <MainSwiggyCard img_url={'https://img.freepik.com/premium-photo/white-sofa-3d-model-white-background_941097-43438.jpg?ga=GA1.1.1005156087.1733204697&semt=ais_hybrid'} productName={'Home Furniture'}/>
      <MainSwiggyCard img_url={'https://img.freepik.com/premium-photo/close-up-stuffed-toy-against-white-background_1048944-22444819.jpg?ga=GA1.1.1005156087.1733204697&semt=ais_hybrid'} productName={'Beauty,Toy and More'}/>
      <MainSwiggyCard img_url={'https://img.freepik.com/premium-photo/motor-bike_878233-2105.jpg?ga=GA1.1.1005156087.1733204697&semt=ais_hybrid'} productName={'Two Wheelers'}/>
      </div>
       <Carousel/>
       <div class='flex'>
        <Electronics img_url={'https://rukminim2.flixcart.com/image/612/612/xif0q/face-wash/o/n/n/100-mango-detan-gel-face-wash-for-all-skin-types-removes-original-imah3xq7s7zwc2pn.jpeg?q=70'} productName={'Face Wash'} />
        <Electronics img_url={'https://rukminim2.flixcart.com/image/612/612/xif0q/smartwatch/i/4/b/-original-imah2thy4cphhcbe.jpeg?q=70'} productName={'Watches'} />
        <Electronics img_url={'https://rukminim2.flixcart.com/image/612/612/xif0q/speaker/i/e/g/-original-imah45qhfy8wfe8t.jpeg?q=70'} productName={'Speakers'} />
        <Electronics img_url={'https://rukminim2.flixcart.com/image/612/612/xif0q/fabric/t/e/3/yes-2-m-unstitched-2-m-2-5-m-l1-a-ky-1551-yashika-original-imah7qtbrgqewphp.jpeg?q=70'} productName={'Women Dress'}/>
        <Electronics img_url={'https://rukminim2.flixcart.com/image/612/612/xif0q/t-shirt/l/b/e/l-bogrhdful-z136-blive-original-imah8uzfzeqt3kz3.jpeg?q=70'} productName={'T-Shirt'} />
       </div>
       <div class='flex'>
        <Moreproduct img_url={'https://rukminim2.flixcart.com/fk-p-flap/520/280/image/b56e10b3081ebd7d.jpg?q=20'}/>
        <Moreproduct img_url={'https://rukminim2.flixcart.com/fk-p-flap/520/280/image/7e7e3e5c9c180eaa.jpg?q=20'}/>
        <Moreproduct img_url={'https://rukminim2.flixcart.com/fk-p-flap/520/280/image/473e0b52208280aa.jpg?q=20'}/>
       </div>
       <div>
        <Footer about={'About'} />
        
       </div>
    </div>
  )
}

export default App
