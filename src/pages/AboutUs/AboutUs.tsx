import SectionTitle from "../Home/SectionTitle";

const AboutUs = () => {
  return (
    <div className="py-40">
      <div className="max-w-7xl mx-auto">
        <SectionTitle title="About Us" />
      </div>
      <div className="bg-black p-20">
        <p className="text-white font-semibold text-center text-xl">
          We are committed not only to bringing you the best about mechanical
          keyboards,
        </p>
        <p className="text-white font-semibold text-center text-xl">
          also turning the best designs into real products.
        </p>
      </div>

      <div className="hero pt-40 pb-20">
      <div className="hero-content flex-col lg:flex-row lg:gap-10">
        <div className="w-1/2">
        <img
          src="https://i.ibb.co.com/CmCYqmQ/hhkb-hybrid-type-s.jpg"
          className="rounded-lg"
        />
        </div>
        <div className="w-1/2">
          <p className="leading-8 text-lg text-justify">
          We are passionate about providing top-quality mechanical keyboards tailored to your needs. Our products are crafted with precision, offering durability, customizability, and a premium typing experience. Whether you're a gamer, writer, or tech enthusiast, we have the perfect keyboard for you. We prioritize customer satisfaction by offering exceptional support, fast shipping, and a wide variety of switch options. Our keyboards are designed to enhance productivity and comfort while ensuring style and performance. Choose us for reliable, high-quality mechanical keyboards that elevate your experience to the next level.
          </p>
        </div>
      </div>
    </div>
    </div>
  );
};

export default AboutUs;
