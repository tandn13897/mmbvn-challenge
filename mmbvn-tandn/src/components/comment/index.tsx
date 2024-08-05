import { ReactElement } from "react";
import { TComment } from "../../types/comment";
import LikeIcon from "../../assets/like";
import DislikeIcon from "../../assets/dislike";

const Comment = (props: TComment): ReactElement => {
  const { author, time, content, like, dislike } = props;
  return (
    <div className="flex mb-[20px]">
      <div className="h-7 w-7 aspect-square p-0 rounded-full bg-white mt-1"></div>
      <div className="w-full ml-[13px]">
        <div className="mb-[15px]">
          <p className="font-normal text-xs m-0">{author}</p>
          <p className="font-normal text-xs m-0 text-[#787878] mb-[10px]">
            {time}
          </p>
          <p className="font-normal text-xs m-0 text-white">{content}</p>
        </div>
        <div className="flex text-[10px] w-3/5 mt-5 items-center gap-5">
        <div className="flex items-center gap-2">
          <LikeIcon />
          {like}
        </div>
        <div className="flex items-center gap-2">
          <DislikeIcon />
          {dislike}
        </div>
      </div>
      </div>
    </div>
  );
};

export default Comment;
