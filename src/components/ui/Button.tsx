const Button = ({ title }: { title: string }) => {
  return (
    <button className="uppercase btn bg-secondaryColor rounded text-white hover:bg-primaryFont">
      {title}
    </button>
  );
};

export default Button;
