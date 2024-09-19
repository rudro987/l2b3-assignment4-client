import SectionTitle from "../Home/SectionTitle";

const Products = () => {
  return (
    <div className="py-20 max-w-7xl mx-auto">
      <SectionTitle title="Our Products" />
      <div className="flex justify-between">
        <div>Search</div>
        <div>filter</div>
      </div>
    </div>
  )
};

export default Products;
