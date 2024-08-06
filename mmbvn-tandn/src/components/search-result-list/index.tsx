import { TResult } from "../../types/search-type";
import SearchResult from "../search-result";

const SearchResultsList = ({ results }: { results: TResult[]}) => {
  return (
    <div className="text-white absolute top-[70px] left-[350px] w-[630px] p-[15px] bg-black opacity-70">
      {results.map((result, id) => {
        return <SearchResult result={result.name} id={result.id} key={id} />;
      })}
    </div>
  );
};

export default SearchResultsList;