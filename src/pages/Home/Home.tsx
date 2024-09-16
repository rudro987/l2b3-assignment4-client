import CustomerReviews from "./CustomerReviews";
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
      <CustomerReviews />
    </div>
  )
};

export default Home;
