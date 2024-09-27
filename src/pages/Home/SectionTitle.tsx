const SectionTitle = ({ title }: {title: string}) => {
  return (
    <div className="divider pb-10 lg:pb-20">
        <h1 className="text-3xl lg:text-5xl text-center text-secondaryColor font-semibold">
            {title}
        </h1>
      </div>
  )
};

export default SectionTitle;