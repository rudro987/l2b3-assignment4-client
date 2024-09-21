import Button from "../../components/ui/Button";

const Banner = () => {
  return (
          <div
          className="hero min-h-screen"
          style={{
            backgroundImage:
              "url(https://i.ibb.co.com/LnykCX2/compactmechanicalkeyboards-2048px-1749-2x1-1.webp)",
            backgroundPositionY: "top",
          }}
        >
          <div className="hero-overlay bg-opacity-70"></div>
          <div className="">
            <div className="max-w-7xl">
              <h1 className="mb-5 text-7xl font-bold text-primaryFont">Welcome!</h1>
              <p className="mb-5 max-w-lg text-white leading-8 text-lg">
              Unlike membrane keyboards, where pressing a key pushes down on a single keyboard-sized membrane to complete a circuit, mechanical keyboards use individual mechanical switches for each key. Shop from a wide variety of sizes, switch types, keycaps, brands, and more to customize your gaming and typing experience.
              </p>
              <Button title="all products" />
            </div>
          </div>
        </div>
  );
};

export default Banner;
