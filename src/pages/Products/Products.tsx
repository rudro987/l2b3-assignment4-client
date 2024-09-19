import Loader from "../../components/ui/Spinner/Loader";
import { useGetAllProductsQuery } from "../../redux/features/getAllProductsApi";
import SectionTitle from "../Home/SectionTitle";
import { TUpdateProps } from "../ProductManagement/ProductManagement";
import ProductCard from "./ProductCard";
import Button from "../../components/ui/Button";
import { SubmitHandler, useForm } from "react-hook-form";

type TSearchTerm = {
  searchTerm?: string;
}

const Products = () => {
  const query = {};

  const { data, isLoading } = useGetAllProductsQuery(query);

  const {register, handleSubmit} = useForm<TSearchTerm>();

  const products = data?.data;

  const onSubmit: SubmitHandler<TSearchTerm> = (data) => console.log(data.searchTerm);


  if(isLoading){
    return <Loader size="160px" />
  }
  return (
    <div className="py-20 max-w-7xl mx-auto">
      <SectionTitle title="Our Products" />
      <div className="flex justify-between pb-10">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex gap-2 items-center">
          
          <input type="text" placeholder="Search by product name or brand name" {...register('searchTerm')} className="w-[320px] h-12 leading-6 px-4 border border-secondaryColor rounded focus-visible:outline-none" />
          <Button title="search" />
          
        </div>
        </form>
        <div>filter</div>
      </div>

      <div className="grid grid-cols-3 gap-5">
        {products?.map((product: TUpdateProps, index: number) => (
          <ProductCard product={product} key={index} />
        ))}
      </div>


    </div>
    
  )
};

export default Products;
