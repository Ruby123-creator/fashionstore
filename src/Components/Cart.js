import React, { useState } from 'react'
import { useSelector ,useDispatch } from 'react-redux'
import { removeItems } from '../Redux/Actions/Cartaction';
function Cart() {
  const items = useSelector((state)=>state.cart.cartItems)
  // let [count , setcount] = useState(1);
  let count =0;
  // console.log(items);
  // console.log(items.title)
  let dispatch = useDispatch();
  return (
    <div>
      <p>cart</p>
      <div className="cartitems">
        {
          
          items && items.map((item,index)=>{
            // console.log(item.id);
            return(
              <div key={item.id} className='cart'>
              <div className='cart-products'>
                <span><button onClick={()=>dispatch(removeItems(item.id))}>Remove</button></span>
                <img width="100px" src={item.thumbnail} alt="" />
                <p>{item.title}</p>
                <p>{item.price}</p>
                {/* <input type="number" value={count} name="" id="" onChange={(e)=>{
                  e.preventDefault();
                  setcount(e.target.value)
                }
                  } />
              <p>{count*item.price}</p> */}
              </div>
              <div className='checkoutList' >
                <div className='list'>
                   
                  <p>{`${++count} ${item.title}`}</p>
                  <p>{item.price}</p>
                </div>
              </div>
            </div>
            )
            
          })
        }
      </div>

      
    </div>
  )
}

export default Cart