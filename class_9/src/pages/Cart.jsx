import React from 'react'
import SingleCart from '../components/SingleCart'
import "./Cart.css";
import { useNavigate } from 'react-router-dom';
function Cart({ cartItem }) {
  const navigate = useNavigate()
  console.log("cart me data", cartItem)
  return (
    <div>
      {
        cartItem.length === 0 ? (<div className="empty-cart-container">
          <p className="empty-cart-msg">No item in cart — go to Home and add items!!!</p>
          <button className="go-home-btn" onClick={() => (navigate("/"))}>Go to Home</button>
        </div>

        ) : (<div className='product-grid1'>
          {
            cartItem.map((item, index) => {
              return (<div key={index}>
                <SingleCart
                  item={item}
                />
              </div>)
            })
          }
        </div>)
      }
    </div>
  )
}

export default Cart