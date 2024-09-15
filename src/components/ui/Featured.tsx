import FeaturedCard from "./FeaturedCard";
import SectionTitle from "./SectionTitle";

const Featured = () => {
  return (
    <>
    <SectionTitle title='Featured Products' />
      <div className="grid grid-cols-3 gap-5">
        <FeaturedCard />
      </div>
    </>
  );
};

export default Featured;
