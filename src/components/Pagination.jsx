/* eslint-disable react/prop-types */
import { ChevronLeft, ChevronRight } from "lucide-react";

const Pagination = ({ handleNextClick, handlePrevClick }) => {
  return (
    <>
      <div className="flex gap-3 justify-center items-center">
        <button
          className="bg-gray-700 text-white px-4 py-2 rounded-md cursor-pointer hover:bg-gray-600"
          onClick={handlePrevClick}
        >
          <ChevronLeft />
        </button>
        <button
          className="bg-gray-700 text-white px-4 py-2 rounded-md cursor-pointer hover:bg-gray-600"
          onClick={handleNextClick}
        >
          <ChevronRight />
        </button>
      </div>
    </>
  );
};

export default Pagination;
