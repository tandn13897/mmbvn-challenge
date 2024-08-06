import { useNavigate } from "react-router-dom";
import { TResult } from "../../types/search-type";

export const SearchResult = ({
  result,
  id,
}: {
  result: TResult["name"];
  id: string;
}) => {
  const navigate = useNavigate();
  const handleNavigateToDetail = () => {
    navigate("/detail", { state: { id: id } });
  };

  return (
    <div
      className="hover:bg-slate-400 hover:text-black leading-6"
      onClick={handleNavigateToDetail}
    >
      {result}
    </div>
  );
};

export default SearchResult;
