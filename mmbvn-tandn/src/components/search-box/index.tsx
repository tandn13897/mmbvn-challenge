import { KeyboardEvent, ReactElement, useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import SearchResultsList from "../search-result-list";
import { useAppDispatch } from "../../redux/hooks";
import { setSearchKey } from "../../redux/slice/videoSlice";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { apiKey, baseUrl } from "../../utilities/api";

const SearchBox = (): ReactElement => {
  const [results, setResults] = useState<any>([]);
  const [showResults, setShowResults] = useState<boolean>(false);
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const dispatch = useAppDispatch();

  const handleChange = (value: string) => {
    setInput(value);
    setShowResults(true);
  };

  const handleSearchVideo = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      dispatch(setSearchKey(input));
      navigate("/");
    }
  };

  useEffect(() => {
    const getDropdownValues = setTimeout(async () => {
      await axios({
        method: "get",
        url: `${baseUrl}/search`,
        params: {
          key: apiKey,
          maxResults: 5,
          type: "video",
          part: "snippet",
          q: input,
        },
      })
        .then((res) => {
          if (res.data.items.length > 0) {
            const data = res.data.items.map((item: any) => {
              return {
                name: item.snippet?.title,
                id: item.id?.videoId,
              };
            });

            setResults(data);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }, 1000);

    return () => clearTimeout(getDropdownValues);
  }, [input]);

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
