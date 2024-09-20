import { FaCreditCard, FaTrash } from "react-icons/fa";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { clearCart } from "../../redux/features/slices/cartSlice";

const OrderSummary = () => {

    const dispatch = useAppDispatch();
    const { selectedItems,  totalPrice, totalOrderedItems } = useAppSelector(store => store.cart);
  
    const handleClearCart = () => {
      dispatch(clearCart());
    }
  
    return (
      <div className=" lg:w-80 w-full h-full rounded">
        <div className="px-6 py-4 space-y-10">
          <h1 className="text-3xl font-bold text-secondaryColor">Order Summary</h1>
          <p className="text-sm text-dark mt-2">
            Selected Items : {selectedItems}
          </p>
          <p className="text-sm text-dark mt-2">
            Total Ordered Items : {totalOrderedItems}
          </p>

          <h3 className="text-xl font-semibold text-dark mt-4">
          Total Price : ${totalPrice.toFixed(2)}
          </h3>
        </div>
        <div className="px-4 pb-6">
          {" "}
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleClearCart();
            }}
            className="bg-secondaryColor px-3 py-3 text-white  mt-2 rounded-md w-full text-xs flex justify-between items-center mb-4"
          >
            <span>Clear Cart</span>
            <FaTrash className="inline" width={15} height={15} />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
            }}
            className="bg-primaryFont px-3 py-3 text-white  mt-2 rounded-md w-full text-xs flex justify-between items-center"
          >
            <span>Proceed Checkout</span>
            <FaCreditCard className="inline" width={15} height={15} />
          </button>
        </div>
      </div>
    );
  };
  
  export default OrderSummary;