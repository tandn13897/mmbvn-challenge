import { ReactElement } from "react";
import { TAvatar } from "../../types/avatar";

const Avatar = (props: TAvatar | undefined): ReactElement => {
  return (
    <div
      className={`border rounded-full bg-[#5F6AB9] capitalize text-lg font-medium w-[34px] h-[34px] flex items-center justify-center ${
        props?.className ?? ""
      }`}
    >
      T
    </div>
  );
};

export default Avatar;
