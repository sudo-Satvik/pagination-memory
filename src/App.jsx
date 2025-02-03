import { useState } from "react";
import { sculptureList } from "./data/blogData";
import Card from "./components/Card";
import Pagination from "./components/Pagination";
const App = () => {
  const [page, setPage] = useState(1);
  // console.log(sculptureList[0]);
  let data = sculptureList[page - 1];
  return (
    <div className="bg-black w-full h-screen flex flex-col gap-10 justify-center items-center">
      <h1 className="text-white text-4xl">Just a Docs&rsquo; Blog</h1>
      <Card
        alt={data.alt || "Unknown"}
        artist={data.artist}
        description={data.description}
        name={data.name}
        url={data.url}
      />
      <Pagination
        handleNextClick={() => {
          if (page < sculptureList.length) {
            setPage(page + 1);
          }
        }}
        handlePrevClick={() => {
          if (page > 1) {
            setPage(page - 1);
          }
        }}
      />
      <div className="text-white">
        Page: {page} of {sculptureList.length}
      </div>
    </div>
  );
};

export default App;
