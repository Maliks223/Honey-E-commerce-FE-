import React, { useContext } from "react";
import { CartContext } from "./Cart";

const Items = ({ _id, description, title, img, total_price, qty }) => {
  const { removeItem, increment, decrement } = useContext(CartContext);

  const removeFromCart = (id) => {

      let products_array = JSON.parse(localStorage.getItem("cart_products"));
      products_array=products_array.filter((ele)=> {
        return ele._id!=id
      })
      localStorage.setItem("cart_products", JSON.stringify(products_array));
  };


  return (
    <>
      <div className="items-info">
        <div className="product-img">
          <img src={img} alt="iamge" />
        </div>

        <div className="title">
          <h2>{title}</h2>
          <p>{description}</p>
        </div>

        <div className="add-minus-quantity">
          <i className="fas fa-minus minus" style={{ color: 'red' }}  onClick={() => decrement(_id)}></i>
          <input type="text" placeholder={qty} />
          <i className="fas fa-plus add" onClick={() => increment(_id)}></i>
        </div>

        <div className="price">
          <h3>{total_price}$</h3>
        </div>

        <div className="remove-item">
          <i
            className="fas fa-trash-alt remove"
            onClick={() => removeFromCart(_id)}
          ></i>
        </div>
      </div>

      <hr />
    </>
  );
};

export default Items;
