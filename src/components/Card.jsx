/* eslint-disable react/prop-types */
const Card = ({ alt, artist, description, name, url }) => {
  return (
    <div className="bg-gray-800 text-white px-4 py-3 rounded-md max-w-200">
      <div className="flex gap-5 sm:flex-row flex-col justify-center items-center">
        <div>
          <img
            src={url}
            className="h-full object-cover rounded-lg w-full md:w-[500px] md:h-[150px]"
            alt={alt}
          />
        </div>
        <div>
          <h1 className="text-2xl font-medium text-center md:text-left">
            {name}
          </h1>
          <h2 className="text-sm text-gray-500 md:text-right text-center">
            ~ {artist || "Unknown Artist"}
          </h2>
          <p className="text-md text-gray-300 mt-2 text-center md:text-left">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
