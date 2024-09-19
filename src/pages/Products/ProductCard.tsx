import { addToCart } from "../../redux/features/slices/cartSlice";
import { useAppDispatch } from "../../redux/hooks";
import { TUpdateProps } from "../ProductManagement/ProductManagement";

const ProductCard = ({ product }: {product: TUpdateProps}) => {

  const dispatch = useAppDispatch();

  const handleAddToCart = (productData: TUpdateProps) => {
      dispatch(addToCart(productData));
  }

  return (
    <>
      <div className="card w-full">
        <figure>
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-[400px]"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{product.name}</h2>
          <p>{(product.description).substring(0, 100)}...</p>
          <div className="card-actions justify-end">
            <button onClick={e => {
              e.stopPropagation();
              handleAddToCart(product);
            }} className="uppercase btn bg-secondaryColor rounded text-white hover:bg-primaryFont">add to cart</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
