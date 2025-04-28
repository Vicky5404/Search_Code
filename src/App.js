import React from "react";
import Counter from "./usestate/Counter";
import Text from "./usestate/Text";
import MultipleStates from "./usestate/MultipleStates";
import Toggle from "./usestate/Toggle";
import Checkbox from "./usestate/Checkbox";
import Todolist from "./usestate/Todolist";

  function button(){
    return(
      // <Counter/>
      <div>
        {/* <Text/> */}
        <MultipleStates/>
        <Toggle/>
        <Checkbox/>
        <Todolist/>
      </div>
    )
  }
  export default button






































                                             // Flipkart appliction
// import React from "react";
// import Flipkart from './Flipkart'
// function flipkart(){
//   return(
//     <Flipkart/>
//   )
// }
// export default Flipkart

                                    //SWIGGY
                            
// import React from "react";
// import Navbar from "./swiggy/Navbar";
// import SwiggyCorporate from "./swiggy/SwiggyCorporate";
// import Search from "./swiggy/Search";
// import Offers from "./swiggy/Offers";
// import Help from "./swiggy/Help";
// import SingIn from "./swiggy/SignIn";
// import Cart from "./swiggy/Cart";
// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Product from "./swiggy/Product";
  
//   function swiggy()
//   {
//     return(
//         <div>
//             <div>
//          <BrowserRouter>
//          <Navbar/>
//          <Routes>
//             <Route path="/SwiggyCorporate" element={<SwiggyCorporate/>}/>
//             <Route path="/Search" element={<Search/>}/>
//             <Route path="/Offers" element={<Product/>}/>
//             <Route path="/Help" element={<Help/>}/>
//             <Route path="/SingIn" element={<SingIn/>}/>
//             <Route path="/Cart" element={<Cart/>}/>
//          </Routes>
//           </BrowserRouter>
//           </div>
//           <div class="flex justify-center">
//           <Product img_url={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Pizzas.png"} productName={'Pizzas'}/>
//          <Product img_url={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/8f508de7-e0ac-4ba8-b54d-def9db98959e_burger.png"} productName={'Burgers'}/>
//          <Product img_url={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2025/1/24/05a939eb-fd4e-4308-b989-d1c54f4421b3_northindian1.png"} productName={'North Indian'}/>
//          <Product img_url={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/17/58760e8e-324f-479e-88fa-31800120ea38_Rolls1.png"} productName={'Rolls'}/>
//          <Product img_url={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/f1263395-5d4a-4775-95dc-80ab6f3bbd89_pasta.png"} productName={'Pasta'}/>
//          <Product img_url={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Paratha.png"} productName={'Paratha'}/>
//           </div>
//         </div>
        
//     )
//   }
//   export default swiggy
