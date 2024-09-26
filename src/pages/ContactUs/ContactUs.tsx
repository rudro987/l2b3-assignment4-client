import { SubmitHandler, useForm } from "react-hook-form";
import Input from "../../components/ui/Input";
import SectionTitle from "../Home/SectionTitle";
import TextArea from "../../components/ui/TextArea";
import Button from "../../components/ui/Button";

export type TInputs = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

const ContactUs = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<TInputs>();
  const onSubmit: SubmitHandler<TInputs> = (data) => {
    console.log(data)
    reset();
  };

  return (
    <div className="py-40">
      <div className="max-w-7xl mx-auto">
        <SectionTitle title="Contact Us" />
      </div>

      <div className="hero max-w-7xl mx-auto bg-[url(https://i.ibb.co.com/2yxBsND/Google-Maps-icon-on-map.png)] bg-cover bg-fixed rounded-md">
        <div className="hero-content w-full flex-col lg:flex-row lg:gap-10 p-20">
          <div className="w-1/2 min-h-full flex justify-center transition-transform transform hover:scale-105">
            <div className="space-y-3">
              <p className="text-2xl font-bold text-primaryFont">Ctrl+Alt+Del Tech Center</p>
              <p>7300 West Boston Street</p>
              <p>Chandler, AZ 85225</p>
              <p>United States</p>
              <p>+1.602.825.2001</p>
              <p>Showroom Hours:</p>
              <p>Monday-Saturday 10:00 AM - 6:00 PM</p>
            </div>
          </div>
          <div className="w-1/2 transition-transform transform hover:scale-105">
            <form onSubmit={handleSubmit(onSubmit)}>
              <Input
                type="text"
                label="Name"
                placeholder="Your Full Name"
                name="name"
                register={register}
                required={false}
              />
              {errors.name && <span className="text-red-700">Name is required</span>}

              <Input
                type="email"
                label="Email"
                placeholder="Email address"
                name="email"
                register={register}
                required={false}
              />
              {errors.email && <span className="text-red-700">Email is required</span>}

              <Input
                type="text"
                label="Phone Number"
                placeholder="Phone Number"
                name="phone"
                register={register}
                required={false}
              />
              {errors.phone && <span className="text-red-700">Phone Number is required</span>}

              <TextArea
                type="text"
                label="Your Message"
                placeholder="Write your message here"
                name="message"
                register={register}
                required={true}
              />
              {errors.message && <span className="text-red-700">Message box can not be empty</span>}

              <div className="form-control mt-6">
                <Button title="send message" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
