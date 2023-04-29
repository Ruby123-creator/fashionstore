import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { fetchData } from '../Redux/Actions/Apiactions'
import { addToCart } from '../Redux/Actions/Cartaction'
import { useEffect } from 'react'
function Home() {
    const loading  = useSelector((state) =>state.data.loading)
    const data  = useSelector((state) =>state.data.data)
    const error = useSelector((state) =>state.data.error)
    const items = useSelector((state)=>state.cart.cartItems)

    const productlist = data.products;

     const dispatch = useDispatch()
     
    useEffect(() =>{
         dispatch(fetchData())
    }, [dispatch]
    )
   if (loading) {
       return <h1>Loading...</h1>
   }
   if (error) {
       return <h1>Error: {error}</h1>
   }

   return(
     <div className='App'>
          <h1>Product-List</h1>
          {/* {
            console.log(data.products)
          } */}
          <div className='Product-list'>
          {
            
             productlist.map((post, index) =>
                <div key={post.id} className='Products' > 
                <div className="img">
                    <img width="250px" height="200px" src={post.thumbnail} alt="" />
                </div>
                <div>
                     <h3>{post.title}</h3>
                </div>
                <div>
                    <p>{post.description}</p>
                </div>
                <div style={{display:"flex" ,justifyContent:"space-between" ,margin:"10px"}}>
                    <p>price:{post.price}</p>
                    <p>Rating:{post.rating}</p>
                </div>
                <div className="addtocart"  >
                    <button className={` addtocart ${items.find(item=>item.id===post.id)?'btn-disable':'btn-blue'}`} disabled={items.find(item=>item.id===post.id)?true:false} onClick={()=>{
                        
                        dispatch(addToCart(post))}}>Add To Cart</button>
                </div>
                </div>
               
               )
          }
          </div>
     </div>
   )
}

export default Home