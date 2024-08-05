import { ReactElement } from "react";

const Chip = ({ category }: { category: string }): ReactElement => {
  return (
    <div className="w-fit capitalize text-xs font-normal rounded-[3px] flex justify-center items-center text-white bg-[#201f1f] px-[15px] pt-[7px] pb-[5px]">
      {category}
    </div>
  );
};

export default Chip;
