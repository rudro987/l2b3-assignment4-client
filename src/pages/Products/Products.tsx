import Loader from "../../components/ui/Spinner/Loader";
import { useGetAllProductsQuery } from "../../redux/features/getAllProductsApi";
import SectionTitle from "../Home/SectionTitle";
import { TUpdateProps } from "../ProductManagement/ProductManagement";
import ProductCard from "./ProductCard";
import Button from "../../components/ui/Button";
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

  const debouncedUpdateQuery = useRef(_.debounce(setQuery, 300)).current;

  const { data, isLoading } = useGetAllProductsQuery(query);

  const products = data?.data;

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    debouncedUpdateQuery((prev) => ({
      ...prev,
      searchTerm: value,
    }));
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
      <div className="flex justify-between pb-10">
        <div className="space-x-3">
        <input
          type="text"
          placeholder="Search by product name or brand name"
          value={query.searchTerm}
          onChange={handleSearchChange}
          className="w-[320px] h-12 leading-6 px-4 border border-secondaryColor rounded focus-visible:outline-none"
        />
        <Button title="search" />
        </div>
        <div className="flex gap-4">
          <select
            onChange={handleSortChange}
            value={query.sort}
            className="w-[180px] h-12 leading-6 px-4 border border-secondaryColor rounded"
          >
            <option value="">Sort by</option>
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
        <div className="grid grid-cols-3 gap-5">
          {products?.map((product: TUpdateProps, index: number) => (
            <ProductCard product={product} key={index} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Products;
