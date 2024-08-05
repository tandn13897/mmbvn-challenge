import { ReactElement } from "react";
import SearchBox from "../search-box";
import { FaMicrophone } from "react-icons/fa6";
import { FaBell } from "react-icons/fa";
import Avatar from "../avatar";

const Header = (): ReactElement => {
  return (
    <div className="pl-4 pt-[25px] pr-[34px] pb-[30px]">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3.5">
          <SearchBox />
          <FaMicrophone color="#ffffff" />
        </div>
        <div className="flex items-center gap-3.5">
          <FaBell color="#ffffff" />
          <Avatar className={undefined} />
        </div>
      </div>
    </div>
  );
};

export default Header;
