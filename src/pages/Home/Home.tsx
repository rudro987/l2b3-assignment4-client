import CustomerReviews from "./CustomerReviews";
import CustomizableOptions from "./CustomizableOptions";
import Featured from "./Featured";
import Services from "./Services";
import TopBrands from "./TopBrands";
import WhyChooseUs from "./WhyChooseUs";

const Home = () => {
  return (
    <div>
      <Services />
      <Featured />
      <WhyChooseUs />
      <TopBrands />
      <CustomizableOptions />
      <CustomerReviews />
    </div>
  )
};

export default Home;
