
import "./SingleCart.css"
import { toast } from "react-toastify";

function SingleCart({ item, setCartItem, cartItem }) {

  let itemInCart
  function addToCart(data) {
    item.isadded = true;
    itemInCart = cartItem?.some((it) => {

      return it === data
    })

    if (itemInCart) {
      toast.warn("item already in cart ")
      return;
    }

    console.log(itemInCart)
    toast.success("Item added in cart!");
    setCartItem((oldData) => {
      return [...oldData, data]
    })
  }
  // console.log(item)
  return (
    <div className="product-card">
      <img src={item?.image
      } alt="img-info" />

      <div className="product-info">
        <p className="product-name">{item?.description}</p>

        <div className="product-bottom">
          <div>
            <p className="price">₹{item?.productPrice}</p>
            <p className="rating">⭐{item?.rating}</p>
          </div>

          <button className="add-btn" onClick={() => {
            addToCart(item)
          }}>{item.isadded ? (<div><span>-</span><span>{item?.quantity}</span><span>+</span></div>) : "Add"}</button>
        </div>
      </div>
    </div>
  );
}

export default SingleCart;
