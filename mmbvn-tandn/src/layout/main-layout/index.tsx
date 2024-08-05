import { ReactElement } from "react";
import LeftNav from "../../components/left-nav";
import Header from "../../components/header";

const MainLayout = ({ children }: {children: ReactElement}): ReactElement => {
  return (
    <div className="flex">
      <LeftNav />
      <div className="basis-10/12">
        <Header />
        {children}
      </div>
    </div>
  );
};

export default MainLayout;
