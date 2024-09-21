import { TUpdateProps } from "../ProductManagement/ProductManagement";

const FeaturedCard = ({ product }: {product: TUpdateProps}) => {
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
          <p>{(product.description).substring(0, 100)}...</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default FeaturedCard;
