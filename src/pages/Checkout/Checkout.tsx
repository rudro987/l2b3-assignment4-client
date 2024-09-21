/* eslint-disable @typescript-eslint/no-explicit-any */
import { toast } from "sonner";
import { useAppSelector } from "../../redux/hooks";
import SectionTitle from "../Home/SectionTitle";
import { SubmitHandler, useForm } from "react-hook-form";
import Input from "../../components/ui/Input";
import Button from "../../components/ui/Button";
import InputSelect from "../../components/ui/InputSelect";

export type TBillingProps = {
  name: string;
  email: string;
  phoneNumber: string;
  address: string;
};

const Checkout = () => {
  const { totalPrice, totalOrderedItems, products } = useAppSelector(
    (store) => store.cart
  );

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<TBillingProps>();

  const onSubmit: SubmitHandler<TBillingProps> = async (data) => {
    console.log(data);
    
    const toastId = toast.loading("Completing your oder!");
    try {
      const productData = {
        name: data.name,
        email: data.email,
        phoneNumber: data.phoneNumber,
        address: data.address,
      };

      console.log(productData);

      toast.success("Order Completed!", { id: toastId, duration: 2000 });

      reset();
    } catch (err: any) {
      toast.error(err.data.errorSources[0].message, {
        id: toastId,
        duration: 5000,
      });
    }
  };

  return (
    <div className="max-w-7xl mx-auto py-20">
      <SectionTitle title="Shipping details" />
      <div className="">
        <div className="flex flex-col lg:flex-row gap-4">
          <div className="text-center lg:text-left w-1/2 flex flex-col gap-3">
            <h1 className="text-3xl font-bold">Order Details</h1>
            <ul className="flex flex-col gap-2">
              {products?.map((product, index: number) => (
                <li key={index}>
                  <p className="mt-2 text-secondaryColor font-semibold">
                    {product.name}
                  </p>
                  <div className="flex gap-2">
                    <p className="mt-2 font-semibold">
                      Order quantity: {product.orderQuantity}
                    </p>
                    <p className="mt-2 font-semibold">
                      Total: ${product.price * product.orderQuantity}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
            <p className="mt-5 text-lg font-bold">
              Total Ordered Items : {totalOrderedItems}
            </p>

            <h3 className="text-xl font-bold mt-4">
              Total Price : ${totalPrice.toFixed(2)}
            </h3>

            <div className="pt-10">
              <h1 className="font-semibold text-lg">
                Select Payment Method :{" "}
              </h1>
            </div>
          </div>
          <div className="card shadow-2xl w-1/2">
            <h1 className="text-3xl font-bold text-center pb-5">
              Billing Details
            </h1>
            <form className="card-body pb-10" onSubmit={handleSubmit(onSubmit)}>
              <Input
               type="text"
                label="Name"
                placeholder="Full Name"
                name="name"
                register={register}
                required={true}
              />
              {errors.name && (
                <span className="text-red-700">Name is required</span>
              )}

              <Input
               type="text"
                label="Email"
                placeholder="Your Email Address"
                name="email"
                register={register}
                required={true}
              />
              {errors.email && (
                <span className="text-red-700">Email is required</span>
              )}

              <Input
               type="text"
                label="Contact Number"
                placeholder="Your phone number"
                name="phoneNumber"
                register={register}
                required={true}
              />
              {errors.phoneNumber && (
                <span className="text-red-700">Phone Number is required</span>
              )}

              <Input
               type="text"
                label="Address"
                placeholder="Your full address"
                name="address"
                register={register}
                required={true}
              />
              {errors.address && (
                <span className="text-red-700">Address is required</span>
              )}

              <div>
              <InputSelect name="paymentMethod" register={register} />
              </div>

              <div className="form-control mt-6">
                <Button title="place order" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
