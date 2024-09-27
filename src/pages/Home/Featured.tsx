import Loader from "../../components/ui/Spinner/Loader";
import { useGetAllProductsQuery } from "../../redux/features/getAllProductsApi";
import { TUpdateProps } from "../ProductManagement/ProductManagement";
import FeaturedCard from "./FeaturedCard";
import SectionTitle from "./SectionTitle";

const Featured = () => {
  const query = { limit: 6 };
  const { data, isLoading } = useGetAllProductsQuery(query);

  const allProducts = data?.data;

  if (isLoading) {
    return <Loader size="160px" />;
  }

  return (
    <div className="pb-20 lg:pb-40 max-w-7xl mx-auto">
      <SectionTitle title="Featured Products" />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 px-5 lg:px-0">
        {allProducts?.map((product: TUpdateProps, index: number) => (
          <FeaturedCard product={product} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Featured;
