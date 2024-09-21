import { useLocation } from "react-router-dom";
import SectionTitle from "../Home/SectionTitle";
import Rating from "../../components/ui/Rating";
import { addToCart } from "../../redux/features/slices/cartSlice";
import { useAppDispatch } from "../../redux/hooks";
import { TUpdateProps } from "../ProductManagement/ProductManagement";

const ProductDetails = () => {
    const location = useLocation();
    const { product } = location.state;

    const dispatch = useAppDispatch();

  const handleAddToCart = (productData: TUpdateProps) => {
    dispatch(addToCart(productData));
  };

  return (
    <div className="max-w-7xl mx-auto py-20">
        <SectionTitle title={product.name} />
    <div className="flex gap-10 pb-10">
      <div className="w-1/2">
      <img src={product.image} alt={product.name} /></div>
      <div className="w-1/2 space-y-5 px-10">
      <p className="text-lg"><span className="font-semibold">Title: </span>{product.name}
      </p>
      <p className="text-lg"><span className="font-semibold">Brand: </span>{product.brand}</p>
      <p className="text-lg"><span className="font-semibold">Price: </span>${(product.price).toFixed(2)}</p>
      <p className="text-lg"><span className="font-semibold">Available Quantity: </span>{(product.quantity)}</p>
      <p className="text-lg flex gap-5 items-center"><span className="font-semibold">Rating: </span><Rating rating={product.rating} /></p>
      <div className="card-actions pt-8">
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleAddToCart(product);
              }}
              className="uppercase btn bg-secondaryColor rounded text-white hover:bg-primaryFont"
            >
              add to cart
            </button>
          </div>
      </div>
    </div>
    <div>
        <h1 className="text-lg font-semibold pb-6">Product description: </h1>
        <p className="leading-8">{product.description}</p>
    </div>
    </div>
  )
};

export default ProductDetails;
