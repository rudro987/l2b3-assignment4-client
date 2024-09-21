import { useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

const usePreventRefresh = () => {
  const cart = useSelector((state: RootState) => state.cart);

  useEffect(() => {
    const handleBeforeUnload = (e: BeforeUnloadEvent) => {
      if (cart.products.length > 0) {
        e.preventDefault();
        e.returnValue = "";
      }
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [cart.products.length]);
};

export default usePreventRefresh;