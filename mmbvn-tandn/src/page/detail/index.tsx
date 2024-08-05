import { ReactElement, useEffect, useState } from "react";
import MainLayout from "../../layout/main-layout";
import VideoCard from "../../components/card";
import ViewIcon from "../../assets/view";
import CommentIcon from "../../assets/comment";
import Comment from "../../components/comment";
import { useLocation } from "react-router-dom";
import { apiKey, baseUrl } from "../../utilities/api";
import axios from "axios";

const comments = [
  {
    author: "John Doe",
    time: "5 mins ago",
    content: "Can’t wait to watch this.",
    like: 1403,
    dislike: 321,
  },
  {
    author: "Andrew Duck",
    time: "10 mins ago",
    content: "Awesome!",
    like: 1211,
    dislike: 2,
  },
];

const DetailPage = (): ReactElement => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [videoData, setVideoData] = useState<any>([]);
  const [suggestVideoData, setSuggestVideoData] = useState<any>([]);
  const { state } = useLocation();
  const { id } = state;

  const handleGetDetailVideo = async () => {
    setIsLoading(true);
    await axios({
      method: "get",
      url: `${baseUrl}/videos`,
      params: {
        key: apiKey,
        maxResults: 1,
        type: "video",
        part: "snippet,statistics, player",
        id: id,
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

  const handleGetSuggestVideos = async () => {
    await axios({
      method: "get",
      url: `${baseUrl}/search`,
      params: {
        key: apiKey,
        maxResults: 15,
        type: "video",
        part: "snippet",
        id: id,
      },
    })
      .then((res) => {
        if (res.data.items.length > 0) setSuggestVideoData(res.data.items);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    handleGetDetailVideo();
  }, [id]);

  useEffect(() => {
    if (videoData) {
      handleGetSuggestVideos();
    }
  }, [videoData]);

  return (
    <MainLayout>
      <div className="flex text-white gap-4">
        <div className="basic-2/3 text-white w-full">
          {!isLoading && videoData.length > 0 && videoData[0] ? (
            <>
              <div
                className="w-full h-[401px]"
                dangerouslySetInnerHTML={{
                  __html: videoData[0].player.embedHtml,
                }}
              ></div>
              <div>
                <div className="py-5">
                  <p>{videoData[0].snippet?.title}</p>
                  <div className="flex text-[10px] w-3/5 mt-5 items-center gap-5">
                    <div className="flex items-center gap-2">
                      <ViewIcon />
                      {videoData[0].statistics.viewCount}
                    </div>
                    <div className="flex items-center gap-2">
                      <CommentIcon />
                      {videoData[0].statistics.commentCount}
                    </div>
                  </div>
                </div>
                <hr className="opacity-[0.08]" />
                <div className="pt-5 pb-[30px] flex">
                  <div className="h-7 w-7 aspect-square p-0 rounded-full bg-white mt-1"></div>
                  <div className="w-full ml-[13px]">
                    <div className="flex justify-between items-center w-full">
                      <div className="mb-[15px]">
                        <p className="font-normal text-xs m-0">
                          {videoData[0].snippet?.channelTitle}
                        </p>
                        <p className="font-normal text-xs m-0 text-[#787878]">
                          322,156 Subscribers
                        </p>
                      </div>
                      <button className="uppercase text-[10px] bg-[#FF0000] w-[105px] h-[23px] rounded">
                        SUBSCRIBE
                      </button>
                    </div>
                    <div>{videoData[0].snippet?.description}</div>
                  </div>
                </div>
                <hr className="opacity-[0.08]" />
                <div className="py-5">
                  <p className="font-medium text-sm mb-[20px]">Comments</p>
                  {comments.map((comment, idx) => {
                    return (
                      <Comment
                        author={comment.author}
                        time={comment.time}
                        content={comment.content}
                        like={comment.like}
                        dislike={comment.dislike}
                        key={idx}
                      />
                    );
                  })}
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="h-screen w-full text-white flex items-start justify-center">
                <div className="animate-bounce h-3 mt-10">Loading ...</div>
              </div>
            </>
          )}
        </div>
        <div className="basic-1/3 flex flex-col gap-4">
          <p className="text-[14px] font-medium">Recommeneded</p>
          {suggestVideoData.length > 0 &&
            suggestVideoData.map((video: any) => {
              return (
                <VideoCard
                  key={video.etag}
                  direction="horizontal"
                  title={video.snippet.title}
                  subTitle="3 months ago"
                  views={234}
                  comments={1235}
                  id={video.id?.videoId}
                  src={video.snippet?.thumbnails?.default?.url}
                />
              );
            })}
        </div>
      </div>
    </MainLayout>
  );
};

export default DetailPage;
