import Link from "next/link";
import { FiChevronRight } from "react-icons/fi";

const PrimaryButton = ({
  title,
  url,
  theme,
}: {
  title: string;
  url: string;
  theme: string;
}) => {
  return (
    <Link
      href={url}
      className={`relative flex items-center w-full p-1.5 rounded-full overflow-hidden group ${theme === "dark" ? "bg-dark" : "bg-background"}`}
    >
      <span
        className={`relative w-full whitespace-nowrap pl-5 pr-6 text-center z-10 ${theme === "dark" ? "text-background" : "text-dark"}`}
      >
        {title}
      </span>
      <div className="relative flex items-center justify-center aspect-square p-3 rounded-full bg-accent overflow-hidden z-10">
        <FiChevronRight className="relative text-dark text-2xl z-10 group-hover:text-background transition-colors duration-300 ease-in-out" />

        <div className="absolute bottom-0 left-0 w-full h-0 bg-dark group-hover:h-full transition-all duration-300 ease-in-out"></div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-0 bg-accent group-hover:h-full transition-all duration-300 ease-in-out"></div>
    </Link>
  );
};

export default PrimaryButton;
