const Services = () => {
  return (
    <div className="grid grid-cols-4 justify-items-stretch gap-10 pt-20">
      <div className="bg-[#242424] border border-[#3A3A3A] rounded-md flex flex-col justify-center items-center py-10 gap-3">
        <h1 className="text-2xl">Free Shipping</h1>
        <p>Order over $300</p>
      </div>
      <div className="bg-[#242424] border border-[#3A3A3A] rounded-md flex flex-col justify-center items-center py-10 gap-3">
        <h1 className="text-2xl">Quick payment</h1>
        <p>100% Secure</p>
      </div>
      <div className="bg-[#242424] border border-[#3A3A3A] rounded-md flex flex-col justify-center items-center py-10 gap-3">
        <h1 className="text-2xl">Lowest Delivery Charge</h1>
        <p>Secured and fast delivery</p>
      </div>
      <div className="bg-[#242424] border border-[#3A3A3A] rounded-md flex flex-col justify-center items-center py-10 gap-3">
        <h1 className="text-2xl">24/7 Support</h1>
        <p>Ready For You</p>
      </div>
    </div>
  )
};

export default Services;
