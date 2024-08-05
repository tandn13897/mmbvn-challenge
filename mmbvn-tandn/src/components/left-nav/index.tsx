import { ReactElement } from "react";
import { YoutubeIcon } from "../../assets/youtube";
import { IoMenuOutline } from "react-icons/io5";
import SubMenu from "../sub-menu";
import { TMenuItem } from "../../types/sub-menu";
import HomePageIcon from "../../assets/homepage";
import ExploreIcon from "../../assets/explore";
import FavoriteIcon from "../../assets/favorite";
import MessageIcon from "../../assets/message";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../redux/hooks";
import { setSearchKey } from "../../redux/slice/videoSlice";

const RoundIcon = ({ className }: { className: string }): ReactElement => {
  return <div className={`aspect-square p-0 rounded-full ${className}`}></div>;
};

const mainMenu: TMenuItem[] = [
  {
    icon: <HomePageIcon />,
    name: "Home",
    link: "#",
  },
  {
    icon: <ExploreIcon />,
    name: "Explore",
    link: "#",
  },
  {
    icon: <FavoriteIcon />,
    name: "Favorites",
    link: "#",
  },
  {
    icon: <MessageIcon />,
    name: "Messages",
    link: "#",
  },
];

const subcriptMenu: TMenuItem[] = [
  {
    icon: <RoundIcon className={"h-[22px] w-[22px] bg-white"} />,
    name: "The Futur",
    link: "#",
  },
  {
    icon: <RoundIcon className={"h-[22px] w-[22px] bg-white"} />,
    name: "Matthew Encina",
    link: "#",
  },
  {
    icon: <RoundIcon className={"h-[22px] w-[22px] bg-white"} />,
    name: "Paulo Trajano",
    link: "#",
  },
  {
    icon: <RoundIcon className={"h-[22px] w-[22px] bg-white"} />,
    name: "DAZN",
    link: "#",
  },
  {
    icon: <RoundIcon className={"h-[22px] w-[22px] bg-white"} />,
    name: "Gawx Art",
    link: "#",
  },
  {
    icon: <RoundIcon className={"h-[22px] w-[22px] bg-white"} />,
    name: "Nintendo",
    link: "#",
  },
  {
    icon: <RoundIcon className={"h-[22px] w-[22px] bg-white"} />,
    name: "Cuberto Design",
    link: "#",
  },
];

const categoryMenu = [
  {
    icon: <RoundIcon className={"h-2 w-2 bg-[#EF5DA8]"} />,
    name: "Games",
    link: "#",
  },
  {
    icon: <RoundIcon className={"h-2 w-2 bg-[#5D5FEF]"} />,
    name: "Sports",
    link: "#",
  },
  {
    icon: <RoundIcon className={"h-2 w-2 bg-[#FFDE89]"} />,
    name: "Design",
    link: "#",
  },
  {
    icon: <RoundIcon className={"h-2 w-2 bg-[#89F8FF]"} />,
    name: "Tech",
    link: "#",
  },
  {
    icon: <RoundIcon className={"h-2 w-2 bg-[#FF5353]"} />,
    name: "Movies",
    link: "#",
  },
  {
    icon: <RoundIcon className={"h-2 w-2 bg-[#89FFA3]"} />,
    name: "Office",
    link: "#",
  },
];

const LeftNav = (): ReactElement => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleNavigateToHomepage = () => {
    dispatch(setSearchKey(""));
    navigate("/");
  };

  return (
    <div className="pl-[35px] pt-[32px] pr-[20px] basis-2/12 text-white">
      <div className="flex justify-between">
        <div onClick={handleNavigateToHomepage}>
          <YoutubeIcon />
        </div>
        <IoMenuOutline color="#ffffff" size={24} />
      </div>
      <div className="mt-[28px] mb-[30px]">
        {mainMenu.map((item) => {
          return (
            <div
              className="font-normal text-xs flex items-center mb-[15px]"
              key={item.name}
            >
              <div className="basis-2/12 flex items-center pl-1">
                {item.icon}
              </div>
              <a className="basis-10/12" href={item.link}>
                {item.name}
              </a>
            </div>
          );
        })}
      </div>
      <hr className="opacity-[0.08]" />
      <div className="mt-[25px] mb-[30px]">
        <SubMenu header="SUBSCRIPTIONS" items={subcriptMenu} />
      </div>
      <hr className="opacity-[0.08]" />
      <div className="mt-[25px] mb-[30px]">
        <SubMenu header="TOP CATEGORIES" items={categoryMenu} />
      </div>
    </div>
  );
};

export default LeftNav;
