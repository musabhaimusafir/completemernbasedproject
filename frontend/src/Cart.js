
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { removeItems } from "./productSlice";
import { useNavigate } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
const Cart=()=>{

    
    const cartItems=useSelector(state=>state.shop.fltitems);
    const totalprice=useSelector(state=>state.shop.totalAmount);
    const navigate=useNavigate();
   const dispatch=useDispatch();

 
    const remitem=(id)=>{
      dispatch(removeItems(id));
    }
  const handlCheckout=()=>{
   
    navigate("../payment")
  }
    const ans=cartItems.map((key)=>{
        return(
            <>         
           <div className="orgnicpro2">
           <div className="proimg2">
     <img src={key.image} alt="" className="proimg12"/>
           </div>
           <div className="contentorgnic2">
          
Lorem ipsum dolor sit amet
 consectetur adipisicing elit sed do
  eiusmod te incididunt
 
           </div>
           <div className="bestseller412">
           <div className="bestseller612">
                    <p style={{fontSize:"20px",color:"rgb(100, 83, 83)",fontWeight:"bold",margin:"10px"}}>
                        <br/>leechi</p>
                        <span style={{fontSize:"20px",color:"yellowgreen"}}><FaStar /><FaStar /><FaStar /><FaStar /></span><span style={{fontSize:"20px",color:"rgb(100, 83, 83)"}}><FaStar /></span>
                        <br/>
                    <span className="many12">${key.price}</span>
                    <button className="many112" onClick={()=>{remitem(key.id)}}><FaLock /> Remove to <br/> cart</button>
                   
                    </div>
                    </div>
          </div>
            </>
        )
    })

    return(
        <>
       <div className="cartnav">      
       <div className="finalpro">
       {ans}
       </div>
      <div className="totalAmountShow">
             <h3>TotalAmount:</h3><div className="totleamt">${totalprice}</div>
      </div>
      <div className="totalAmountShow">
             <button className="totleamt1" onClick={handlCheckout}>Checkout</button>
      </div>
       </div>
        </>
    );
}
export default Cart;