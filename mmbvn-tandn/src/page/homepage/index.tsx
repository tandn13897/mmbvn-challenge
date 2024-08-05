import { ReactElement, useEffect, useState } from "react";
import MainLayout from "../../layout/main-layout";
import VideoCard from "../../components/card";
import Chip from "../../components/chip";
import { baseUrl, apiKey } from "../../utilities/api";
import axios from "axios";
import { RootState } from "../../redux/store";
import { useAppSelector } from "../../redux/hooks";

const chips = [
  {
    text: "all",
  },
  {
    text: "gaming",
  },
  {
    text: "music",
  },
  {
    text: "graphic design",
  },
  {
    text: "JavaScript",
  },
  {
    text: "apple",
  },
  {
    text: "keyboards",
  },
  {
    text: "websites",
  },
  {
    text: "desks",
  },
  {
    text: "Unboxing",
  },
  {
    text: "Photography",
  },
  {
    text: "Jordans",
  },
  {
    text: "Nike",
  },
];

const HomePage = (): ReactElement => {
  const [videoData, setVideoData] = useState<any>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const searchKey = useAppSelector((state: RootState) => state.video.searchKey);

  const handleGetVideoList = async () => {
    setIsLoading(true);
    await axios({
      method: "get",
      url: `${baseUrl}/search`,
      params: {
        key: apiKey,
        maxResults: 20,
        type: "video",
        part: "snippet",
        q: searchKey,
      },
    })
      .then((res) => {
        if (res.data.items.length > 0) setVideoData(res.data.items);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  useEffect(() => {
    handleGetVideoList();
  }, [searchKey]);

  return (
    <MainLayout>
      <>
        <div className="mb-[30px] flex gap-[10px]">
          {chips.map((chip) => {
            return <Chip category={chip.text} key={chip.text} />;
          })}
        </div>

        {!isLoading && videoData.length > 0 ? (
          <div className="grid grid-cols-6 gap-[30px]">
            {videoData.map((each: any) => {
              return (
                <VideoCard
                  direction="vertical"
                  title={each?.snippet?.title}
                  subTitle="3 months ago"
                  key={each.etag}
                  src={each.snippet?.thumbnails?.default?.url}
                  id={each.id?.videoId}
                />
              );
            })}
          </div>
        ) : (
          <div className="h-screen w-full text-white flex items-start justify-center">
            <div className="animate-bounce h-3 mt-10">Loading ...</div>
          </div>
        )}
      </>
    </MainLayout>
  );
};

export default HomePage;
