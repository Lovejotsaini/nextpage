import React, { useState } from "react";
import { v4 as uuidv4 } from 'uuid'
import Items from "./items";
import { Link, Route } from 'react-router-dom'
import Cart from "./cart";


const Table = (props) => {
    const { data } = props
    const [count,setCount]=useState(0)
    const [cart,setCart]=useState([])

   const incrementCarts=()=>{
        setCount(count + 1)
        console.log(count)
        if(count>2){
            alert('stop it')
        }
   }
   const decrementCart=()=>{
       setCount(count - 1)
   }
   const cartData=(data)=>{
        const result=[data,...cart]
        setCart(result)
    }
    localStorage.setItem('cart',JSON.stringify(cart))
   
  
   
 

    return (
        <div>
            <li><Link to="/cart">cart-{count}</Link></li>
            <table border="1">
            <thead>
        <tr>
          <th>Subject</th>
          <th>Date</th>
          <th>Time</th>
          <th>Availability</th>
        </tr>
      </thead>
            {data.map((ele) => {
                return <Items cartData={cartData} decrementCart={decrementCart} incrementCarts={incrementCarts} id={ele.id} Subject={ele.Subject} Date={ele.Date} Time={ele.Time} Availability={ele.Availability} />
                
            })}
            </table>

            <Route path="/cart" component={Cart}  exact={true} />
        </div>
    )
}

export default Table