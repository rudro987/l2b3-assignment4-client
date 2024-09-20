/* eslint-disable @typescript-eslint/no-explicit-any */
import { useAppSelector } from "../../redux/hooks";
import CartDetails from "./CartDetails";
import OrderSummary from "./OrderSummary";

const Cart = () => {

  const products = useAppSelector(store => store.cart.products);

  return (
    <div className="container mt-20 mx-auto">
      <div className="flex lg:flex-row flex-col-reverse justify-around pb-60">
        <div className="space-y-5 lg:mt-0 mt-5">
          {products.length ? (
            products.map((product: any, index: number) => (
              <CartDetails key={index} product={product} />
            ))
          ) : (
              <p className="text-2xl text-primaryFont font-bold"> Cart is empty!</p>
          )}

        </div>
        <OrderSummary />
      </div>
    </div>
  )
};

export default Cart;
