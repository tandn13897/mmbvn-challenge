import { ReactElement } from "react";
import { TSubMenu, TMenuItem } from "../../types/sub-menu";

const SubMenu = (props: TSubMenu): ReactElement => {
  const { header, items } = props;
  return (
    <div>
      <div className="uppercase text-[10px] font-medium text-[#787878] mb-[22px]">{header}</div>
      <div>
        {items.map((item: TMenuItem) => {
          return (
            <div className="font-normal text-xs flex items-center mb-[15px]" key={item.name}>
              <div className="basis-2/12 flex items-center pl-1">{item.icon}</div>
              <a className="basis-10/12" href={item.link}>
                {item.name}
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SubMenu;
