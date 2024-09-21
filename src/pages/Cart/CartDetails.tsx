import { FaMinus, FaTrash, FaPlus } from "react-icons/fa";
import { useAppDispatch } from "../../redux/hooks";
import { removeCartItem, TCartItems, updateQuantity } from "../../redux/features/slices/cartSlice";
import React from "react";

const CartDetails = ({ product }: {product: TCartItems}) => {
    
  const dispatch = useAppDispatch();

    const handleQuantity = (type: string, id: string) => {
      const payload = { type, id };
      dispatch(updateQuantity(payload));
    };
  
    const removeItem = (e: React.MouseEvent<HTMLButtonElement>, id: string) => {
      e.stopPropagation();
      const payload = { id };
      dispatch(removeCartItem(payload));
    };
  
    return (
      <div className="flex items-center justify-between space-x-4 border border-secondaryColor rounded-lg p-4 bg-white shadow-md transition-transform transform hover:scale-105 hover:shadow-lg w-full">
        <img
          src={product.image}
          alt={product.name}
          className="w-24 h-24 object-cover rounded-md"
        />
        <div className="flex-grow mx-4">
          <h3 className="text-lg font-semibold truncate mb-2">
            {product.name}
          </h3>
          <div className="flex gap-10">
          <p className="text-lg font-bold text-primaryFont">${product.price}</p>
          <p className="text-lg font-bold text-secondaryColor">Available stock: {product.quantity}</p>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <button
            onClick={() => handleQuantity("decrement", product._id)}
            className="bg-secondaryColor text-white p-2 rounded-full hover:bg-primaryFont"
          >
            <FaMinus size={18} />
          </button>
          <span className="text-lg font-semibold">{product.orderQuantity}</span>
          <button
            onClick={() => handleQuantity("increment", product._id)}
            className="bg-secondaryColor text-white p-2 rounded-full hover:bg-primaryFont"
          >
            <FaPlus size={18} />
          </button>
        </div>
        <button
          onClick={(e) => removeItem(e, product._id)}
          className="bg-primaryFont text-white p-2 rounded-full hover:bg-secondaryColor"
        >
          <FaTrash size={18} />
        </button>
      </div>
    );
  };
  
  export default CartDetails;