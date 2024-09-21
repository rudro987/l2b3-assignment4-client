import { FaCreditCard, FaTrash } from "react-icons/fa";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { clearCart } from "../../redux/features/slices/cartSlice";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const OrderSummary = () => {

  const navigate = useNavigate();

    const dispatch = useAppDispatch();

    const { selectedItems,  totalPrice, totalOrderedItems, products } = useAppSelector(store => store.cart);

    const hasOutOfStockItems = products.some((product) => product.orderQuantity > product.quantity);
  
    const handleClearCart = () => {
      dispatch(clearCart());
    }

    const handleCheckout = () => {
      if (hasOutOfStockItems) {
        Swal.fire({
          title: "Out of Stock!",
          text: "Some items in your cart exceed the available stock. Please adjust the quantities.",
          icon: "error",
          confirmButtonText: "Okay",
        });
      } else {
        navigate('/checkout')
      }
    };
  
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
              handleCheckout();
            }}
            disabled={hasOutOfStockItems}
            className={`${
              hasOutOfStockItems ? "bg-gray-400 cursor-not-allowed" : "bg-primaryFont"
            } px-3 py-3 text-white mt-2 rounded-md w-full text-xs flex justify-between items-center`}
          >
            <span>{hasOutOfStockItems ? "Out of Stock" : "Proceed to Checkout"}</span>
            <FaCreditCard className="inline" width={15} height={15} />
          </button>
        </div>
      </div>
    );
  };
  
  export default OrderSummary;