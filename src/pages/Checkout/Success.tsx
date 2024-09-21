import { Link } from "react-router-dom";
import Button from "../../components/ui/Button";

const Success = () => {
  return (
    <div className="w-full min-h-screen grow flex justify-center items-center">
      <div className="space-y-10 flex flex-auto flex-col justify-center items-center p-4 md:p-5">
          <h1 className="text-5xl">Success</h1>
          <h1 className="text-2xl text-primaryFont foint-semibold">Order completed successfully!</h1>
          <Link to="/"><Button title="go to home" /></Link>
      </div>
    </div>
  )
};

export default Success;
