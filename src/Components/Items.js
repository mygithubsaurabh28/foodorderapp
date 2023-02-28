import React, { useContext } from 'react';
import { CartContext } from './Cart';
import {ContextCart} from './ContextCart';

const Items = ({id,title,img,price,quantity}) => {
    const {removeItem,increment,decrement}=useContext(CartContext);
  return (
    <>
      <div className="items-info">
                <div className="food-image">
                    <img className="paratha" src={img} alt="p"></img>
                </div>
            
        <div className="title">
            <h2>{title}</h2>
        </div>

        <div className='add-minus'>
              <ion-icon name="remove-outline" onClick={()=>decrement(id)}></ion-icon>
                <input className='inputbox' type='text' placeholder={quantity} />
                <ion-icon name="add-outline" onClick={()=>increment(id)}></ion-icon>
              </div>

              <div className='price'>
               <h4>{price}</h4>
              </div>
              <div className='remove-item'>
              <ion-icon name="trash-outline" onClick={()=>removeItem(id)}></ion-icon>
              </div>
              

          </div>
          <hr/>
    </>
  )
}

export default Items
