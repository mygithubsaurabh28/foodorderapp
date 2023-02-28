import React,{useContext, useState} from 'react'
import {Scrollbars} from 'react-custom-scrollbars-2';
import Items from "./Items";
import {Products} from './Products';
import { CartContext } from './Cart';
const ContextCart = () => {
    // const [item,setItem]=useState(Products)
    const {item,clearCart,totalItem,totalAmount} =useContext(CartContext)
    if(item.length===0){
      return (
        <>
        <div className='cart-icon'>
      <img src='./images/cart.jpg' alt='cart'/>
      <p>{totalItem}</p>
     </div>
     <section className='main-cart-section'>
      
        <h2>Food Items</h2>
        <p>You have <span className='total-items'> {totalItem} </span> items in food cart</p>
        </section>

        </>
      )
    }
  return (
    <>
       <div className='cart-icon'>
      <img src='./images/cart.jpg' alt='cart'/>
      <p>{totalItem}</p>
     </div>
     <section className='main-cart-section'>
      
        <h2>Food Items</h2>
        <p>You have<span className='total-items'>{totalItem}</span>items in food cart</p>

        <div className='cart-items'>
          <div className='cart-items-container'>
            <Scrollbars>
              {
                item.map((curItem)=>{
                  return <Items key={curItem.id}{...curItem}/>
                })
              }
            
          </Scrollbars>
          </div>
          </div>
          <div className="card-total">
            <h3>Cart Total:<span>{totalAmount}</span></h3>
            <button>checkout</button><br></br>
            <button className='clear-cart' onClick={clearCart}>Clear Cart</button>
          </div>
          </section>
    </>
  )
}

export default ContextCart;
