import { KeyboardEvent, ReactElement, useState } from "react";
import { FaSearch } from "react-icons/fa";
import SearchResultsList from "../search-result-list";
import { useAppDispatch } from "../../redux/hooks";
import { setSearchKey } from "../../redux/slice/videoSlice";
import { useNavigate } from "react-router-dom";

const SearchBox = (): ReactElement => {
  const [results, setResults] = useState([
    { name: "123", id: 1 },
    { name: "12", id: 2 },
  ]);
  const [showResults, setShowResults] = useState<boolean>(false);
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const dispatch = useAppDispatch();

  const handleChange = (value: string) => {
    setInput(value);
  };

  const handleSearchVideo = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      dispatch(setSearchKey(input));
      navigate('/');
    }
  }

  return (
    <>
      <div className="w-[648px] h-[34px] border rounded-[3px] flex items-center text-white border-transparent opacity-50">
        <FaSearch
          color="#ffffff"
          id="search-icon"
          className="relative left-[30px]"
        />
        <input
          placeholder="Search Videos"
          value={input}
          onChange={(e) => handleChange(e.target.value)}
          type="text"
          className="pl-[43px] focus:outline-none w-full h-full placeholder:text-white bg-[#201f1f]"
          onKeyDown={(e) => handleSearchVideo(e)}
        />
      </div>
      {showResults && results.length > 0 && (
        <SearchResultsList results={results} />
      )}
    </>
  );
};

export default SearchBox;
