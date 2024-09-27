import { useLocation } from "react-router-dom";
import Rating from "../../components/ui/Rating";
import { addToCart } from "../../redux/features/slices/cartSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { TUpdateProps } from "../ProductManagement/ProductManagement";
import { toast } from "sonner";

const ProductDetails = () => {
  const location = useLocation();
  const { product } = location.state;

  const dispatch = useAppDispatch();

  const cartProduct = useAppSelector((state) =>
    state.cart.products.find((item) => item._id === product._id)
  );

  const isStockExceeds = cartProduct && cartProduct.orderQuantity >= cartProduct.quantity
  
  const handleAddToCart = (productData: TUpdateProps) => {
    if(isStockExceeds){
        return toast.error('no more stock')
    }
    dispatch(addToCart(productData));
    toast.success("Product added to cart");
  };
  
  const outOfStock = product.quantity <= 0;

  return (
    <div className="max-w-7xl mx-auto py-20 px-5 lg:px-0">
      <div className="flex flex-col lg:flex-row gap-10 pb-10">
        <div className="lg:w-1/2">
          <img src={product.image} alt={product.name} />
        </div>
        <div className="w-1/2 space-y-5 px-10">
          <p className="text-lg">
            <span className="font-semibold">Title: </span>
            {product.name}
          </p>
          <p className="text-lg">
            <span className="font-semibold">Brand: </span>
            {product.brand}
          </p>
          <p className="text-lg">
            <span className="font-semibold">Price: </span>$
            {product.price.toFixed(2)}
          </p>
          <p className="text-lg">
            <span className="font-semibold">Available Quantity: </span>
            {product.quantity}
          </p>
          <p className="text-lg flex gap-5 items-center">
            <span className="font-semibold">Rating: </span>
            <Rating rating={product.rating} />
          </p>
          <div className="card-actions pt-8">
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleAddToCart(product);
              }}
              disabled={outOfStock || isStockExceeds}
              className={`${
                outOfStock ? "bg-gray-400 cursor-not-allowed" : "bg-secondaryColor hover:bg-primaryFont"
              }uppercase btn rounded text-white hover:bg-primaryFont`}
            >
              {outOfStock || isStockExceeds ? "No More Stock" : "ADD TO CART"}
            </button>
          </div>
        </div>
      </div>
      <div>
        <h1 className="text-lg font-semibold pb-6">Product description: </h1>
        <p className="leading-8">{product.description}</p>
      </div>
    </div>
  );
};

export default ProductDetails;
