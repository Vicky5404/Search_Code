import React ,{ Component }from "react";
class Card extends Component{
    render(){
        return(
            <div className="m-28 border-l-sky-300 ">
                <img src="swiggy.png" alt="" />
                <p>Restorent name</p>
                <p>Restorent Address</p>
            </div>
        )
    }
}
 export default Card