/* eslint-disable @typescript-eslint/no-explicit-any */
import { UseFormRegister } from "react-hook-form";

export type TInputRadioProps = {
  register: UseFormRegister<any>;
  name: string;
};

const InputSelect = ({ register, name }: TInputRadioProps) => {
  return (
    <select {...register(name)} className="w-full h-14 leading-6 px-4 border border-secondaryColor rounded-lg focus-visible:outline-none mt-5">
      <option disabled selected>
        Select Payment method
      </option>
      <option>Cash On Delivery</option>
      <option>Stripe</option>
    </select>
  );
};

export default InputSelect;
