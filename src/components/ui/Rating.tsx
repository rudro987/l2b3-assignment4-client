import { FaStar } from "react-icons/fa";

const Rating = ({ rating }: {rating: number}) => {
  return (
    <div className="flex gap-2 grow">
                  {[...Array(5)].map((_star, index) => {
                    const currentRating = index + 1;

                    return (
                      <label key={index}>
                        <FaStar
                          size={20}
                          className="cursor-pointer relative top-[2px]"
                          color={
                            currentRating <= rating ? "#D91656" : "#A1A0AE"
                          }
                        ></FaStar>
                      </label>
                    );
                  })}
                </div>
  );
};

export default Rating;
