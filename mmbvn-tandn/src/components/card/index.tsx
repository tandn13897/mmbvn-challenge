import { ReactElement } from "react";
import { TCard } from "../../types/card";
import ViewIcon from "../../assets/view";
import CommentIcon from "../../assets/comment";
import { useNavigate } from "react-router-dom";

const VideoCard = (props: TCard): ReactElement => {
  const { direction, title, subTitle, src, id } = props;
  const navigate = useNavigate();

  const handleNavigateToVideo = () => {
    navigate("/detail", { state: { id: id } });
  };

  return (
    <div
      className={`text-white ${
        direction === "vertical"
          ? "w-[196px] h-[188px]"
          : "flex w-[422px] h-[117px]"
      }`}
      onClick={handleNavigateToVideo}
    >
      <div
        className={`${
          direction === "vertical"
            ? "h-[117px] w-full"
            : "h-[117px] min-w-[196px]"
        } rounded-[3px] cursor-pointer`}
      >
        {src ? (
          <img src={src} />
        ) : (
          <div className="h-full w-full bg-[#C4C4C4]"></div>
        )}
      </div>
      <div
        className={`${direction === "vertical" ? "pt-[15px]" : "pl-5 w-full"}`}
      >
        <p
          className={`m-0 mb-[5px] text-xs font-normal capitalize cursor-pointer`}
        >
          {title}
        </p>
        <p className="m-0 text-[10px] font-normal capitalize opacity-50">
          {subTitle}
        </p>

        {direction === "horizontal" && (
          <div className="flex text-[10px] w-3/5 mt-5 items-center">
            <div className="flex basis-1/2 items-center gap-2">
              <ViewIcon />
              {props.views}
            </div>
            <div className="flex basis-1/2 items-center gap-2">
              <CommentIcon />
              {props.comments}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default VideoCard;
