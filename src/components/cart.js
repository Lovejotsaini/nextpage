import React, { useState,useEffect } from "react";

const Cart=(props)=>{
const [data,setData]=useState([])

useEffect(()=>{
    const result=JSON.parse(localStorage.getItem('cart')) || []
    setData(result)
},[data])

const handleDelete=(id)=>{
   const newData= data.filter((ele)=>{
        return ele.id !== id
    })
    setData(newData)
}

    return (
        <div>cart
            <table border="1">
            {data.map((ele)=>{
                return (
                    
              
            <tbody >
                <tr key={ele.id}>
                    <td>{ele.Subject}</td>
                    <td>{ele.Date}</td>
                    <td>{ele.Time}</td>
                    <td>{ele.Availability}</td>
                    <td>
                        <button onClick={()=>{
                            handleDelete(ele.id)
                        }}>delete</button>
                    </td>
                </tr>
                </tbody>
                   
                    
                    
                )
            })}
            </table>
        </div>
    )
}

export default Cart