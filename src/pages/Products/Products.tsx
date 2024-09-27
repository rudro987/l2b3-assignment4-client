import Loader from "../../components/ui/Spinner/Loader";
import { useGetAllProductsQuery } from "../../redux/features/getAllProductsApi";
import SectionTitle from "../Home/SectionTitle";
import { TUpdateProps } from "../ProductManagement/ProductManagement";
import ProductCard from "./ProductCard";
import { useEffect, useRef, useState } from "react";
import _ from "lodash";

type TQueryProps = {
  searchTerm: string;
  sort: string;
  minPrice?: number;
  maxPrice?: number;
};

const Products = () => {
  const [query, setQuery] = useState<TQueryProps>({
    searchTerm: "",
    sort: "",
    minPrice: undefined,
    maxPrice: undefined,
  });

  const [inputValue, setInputValue] = useState<string>("");

  const debouncedUpdateQuery = useRef(
    _.debounce((searchTerm: string) => {
      setQuery((prev) => ({
        ...prev,
        searchTerm,
      }));
    }, 300)
  ).current;

  const { data, isLoading } = useGetAllProductsQuery(query);

  const products = data?.data;

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);
    debouncedUpdateQuery(value);
  };

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setQuery((prev) => ({
      ...prev,
      sort: e.target.value,
    }));
  };

  const handleFilterChange = (type: "min" | "max", value: string) => {
    const numValue = value.trim() !== "" && !isNaN(parseFloat(value)) ? parseFloat(value) : undefined;

    setQuery((prev) => ({
      ...prev,
      [type === "min" ? "minPrice" : "maxPrice"]: numValue,
    }));
  };

  const handleClearFilters = () => {
    setInputValue('');
    setQuery({
      searchTerm: "",
      sort: "",
      minPrice: undefined,
      maxPrice: undefined,
    });
  };

  useEffect(() => {
    return () => {
      debouncedUpdateQuery.cancel();
    };
  }, [debouncedUpdateQuery]);

  if (isLoading) {
    return <Loader size="160px" />;
  }

  const noResults = products && products.length === 0;

  return (
    <div className="py-20 max-w-7xl mx-auto">
      <SectionTitle title="Our Products" />
      <div className="flex flex-col lg:flex-row justify-between pb-10 px-5 lg:px-0">
        <div className="space-x-3">
        <input
          type="text"
          placeholder="Search by product name or brand name"
          value={inputValue}
          onChange={handleSearchChange}
          className="w-[320px] h-12 leading-6 px-4 border border-secondaryColor rounded focus-visible:outline-none"
        />
        </div>
        <div className="flex flex-col lg:flex-row gap-4 pt-2 lg:pt-0">
          <select
            onChange={handleSortChange}
            value={query.sort}
            className="w-[180px] h-12 leading-6 px-4 border border-secondaryColor rounded"
          >
            <option value="">Sort by Default</option>
            <option value="price">Price: Low to High</option>
            <option value="-price">Price: High to Low</option>
          </select>

          <div className="flex gap-2 items-center">
            <input
              type="number"
              placeholder="Min Price"
              value={query.minPrice !== undefined ? query.minPrice : ""}
              onChange={(e) => handleFilterChange("min", e.target.value)}
              className="w-[100px] h-12 leading-6 px-4 border border-secondaryColor rounded"
            />
            <input
              type="number"
              placeholder="Max Price"
              value={query.maxPrice !== undefined ? query.maxPrice : ""}
              onChange={(e) => handleFilterChange("max", e.target.value)}
              className="w-[100px] h-12 leading-6 px-4 border border-secondaryColor rounded"
            />
            <button className="uppercase btn bg-secondaryColor rounded text-white hover:bg-primaryFont" onClick={handleClearFilters}>clear filter</button>
          </div>
        </div>
      </div>

      {noResults ? (
        <div className="flex justify-center items-center py-40 text-3xl font-semibold text-primaryFont">
          No products found!!
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 px-5 lg:px-0">
          {products?.map((product: TUpdateProps, index: number) => (
            <ProductCard product={product} key={index} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Products;
