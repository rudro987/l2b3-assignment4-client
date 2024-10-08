import { TInputProps } from "./Input";

const TextArea = ({ label, placeholder, name, register, value, required=false }:TInputProps) => {

  return (
    <div className="form-control h-">
      <label className="label">
        <span className="text-lg">{label}</span>
      </label>
      <textarea
        placeholder={placeholder}
        {...register(name!, { required: required})}
        defaultValue={value}
        className="w-full h-28 leading-6 px-4 border border-secondaryColor rounded-lg focus-visible:outline-none pt-3"
      ></textarea>
    </div>
  );
};

export default TextArea;
