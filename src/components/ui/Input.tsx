/* eslint-disable @typescript-eslint/no-explicit-any */
import { UseFormRegister } from "react-hook-form";

export type TInputProps = {
  label: string;
  register: UseFormRegister<any>;
  placeholder?: string;
  value?:string | number;
  name: string;
  valueAsNumber?: boolean;
  required?: boolean;
};

const Input = ({ label, placeholder, register, name, value, required=false }: TInputProps) => {

  return (
    <div className="form-control">
      <label className="label">
        <span className="text-lg">{label}</span>
      </label>
      <input
        type="text"
        placeholder={placeholder}
        {...register(name, { required: required})}
        defaultValue={value}
        className="w-full h-14 leading-6 px-4 border border-secondaryColor rounded-lg focus-visible:outline-none"
      />
      
    </div>
  );
};

export default Input;
