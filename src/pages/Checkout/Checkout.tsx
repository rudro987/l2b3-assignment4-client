/* eslint-disable @typescript-eslint/no-explicit-any */
import { toast } from "sonner";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import SectionTitle from "../Home/SectionTitle";
import { SubmitHandler, useForm } from "react-hook-form";
import Input from "../../components/ui/Input";
import Button from "../../components/ui/Button";
import InputSelect from "../../components/ui/InputSelect";
import { useNavigate } from "react-router-dom";
import { clearCart } from "../../redux/features/slices/cartSlice";
import { useUpdateProductMutation } from "../../redux/features/updateProductApi";

export type TBillingProps = {
  name: string;
  email: string;
  phoneNumber: string;
  address: string;
  paymentMethod: string;
};

const Checkout = () => {
  const [updateProduct] = useUpdateProductMutation();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
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
      const updateRequests = products.map((product) =>
        updateProduct({
          id: product._id,
          productUpdatedData: {
            quantity: product.quantity - product.orderQuantity,
          },
        }).unwrap()
      );

      await Promise.all(updateRequests);

      const productData = {
        name: data.name,
        email: data.email,
        phoneNumber: data.phoneNumber,
        address: data.address,
        paymentMethod: data.paymentMethod,
      };

      if (productData.paymentMethod === "Stripe") {
        dispatch(clearCart());
        navigate("/success");
        toast.success("Order Completed!", { id: toastId, duration: 2000 });
        reset();
        return;
      } else if (productData.paymentMethod === "Cash On Delivery") {
        dispatch(clearCart());
        navigate("/success");
        toast.success("Order Completed!", { id: toastId, duration: 2000 });
        reset();
      }

    } catch (err: any) {
      console.log(err);
      toast.error("Something went wrong. Please try again!", {
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
          <div className="text-center lg:text-left lg:w-1/2 flex flex-col gap-3">
            <h1 className="text-3xl font-bold">Order Details</h1>
            <ul className="flex flex-col gap-2">
              {products?.map((product, index: number) => (
                <li key={index}>
                  <p className="mt-2 text-secondaryColor font-semibold">
                    {product.name}
                  </p>
                  <div className="flex justify-center lg:justify-start gap-2">
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
          <div className="card shadow-2xl lg:w-1/2">
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
