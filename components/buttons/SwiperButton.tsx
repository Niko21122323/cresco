import { SwiperButtonTypes } from "@/lib/types/types";

const SwiperButton = ({ id, children }: SwiperButtonTypes) => {
  return (
    <button
      type="button"
      id={id}
      className="relative flex items-center justify-center bg-accent rounded-md size-16 cursor-pointer overflow-hidden group disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none"
    >
      {children}
      <div className="absolute bottom-0 left-0 w-full h-0 bg-dark group-hover:h-full transition-all duration-300 ease-in-out"></div>
    </button>
  );
};

export default SwiperButton;
