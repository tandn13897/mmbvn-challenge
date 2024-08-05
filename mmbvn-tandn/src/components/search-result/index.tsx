import { TResult } from "../../types/search-type";

export const SearchResult = ({ result }: { result: TResult['name'] }) => {
  return (
    <div
      className="hover:bg-slate-400 hover:text-black leading-6"
      onClick={() => alert(`You selected ${result}!`)}
    >
      {result}
    </div>
  );
};

export default SearchResult;
