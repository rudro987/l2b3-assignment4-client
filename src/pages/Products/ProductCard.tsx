import { Link } from "react-router-dom";
import Rating from "../../components/ui/Rating";
import { TUpdateProps } from "../ProductManagement/ProductManagement";

const ProductCard = ({ product }: { product: TUpdateProps }) => {

  return (
    <>
      <div className="card w-full bg-base-200">
        <figure>
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-[400px]"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{product.name}</h2>
          <div className="flex justify-evenly py-3">
            <p className="text-lg">
              <span className="font-semibold">Brand: </span>
              {product.brand}
            </p>
            <p>
              <span className="font-semibold text-lg">Available stock: </span>
              {product.quantity}
            </p>
          </div>
          <div className="flex justify-evenly">
            <p className="text-lg">
              <span className="font-semibold">Price: </span>
              ${(product.price).toFixed(2)}
            </p>
            <h1 className="text-lg font-semibold pr-3">Rating:</h1>
            <Rating rating={product.rating} />
          </div>

          <div className="card-actions justify-center pt-8">
            <Link to={`/products/${product._id}`} state={{ product }}>
              <button className="uppercase btn bg-secondaryColor rounded text-white hover:bg-primaryFont">
                show details
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
