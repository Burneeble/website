import { YoutubeVideo } from "@/components/Pages";
import he from "he";

export const isDurationGreaterThanOneMinute = (isoDuration: string) => {
  const match = isoDuration.match(/PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?/);

  if (!match) {
    throw new Error("Invalid ISO duration format");
  }

  const hours = parseInt(match[1] || "0", 10);
  const minutes = parseInt(match[2] || "0", 10);
  const seconds = parseInt(match[3] || "0", 10);

  const totalSeconds = hours * 3600 + minutes * 60 + seconds;

  return totalSeconds > 60;
};

export const fetchYoutubeVideos =
  async (): Promise<Array<YoutubeVideo> | null> => {
    try {
      const res = await fetch(
        `https://www.googleapis.com/youtube/v3/search?part=snippet&key=AIzaSyAI-1o41MeuYqGwf1_qzRqfVE83r443Ewo&channelId=UCJIrEhdSPKipBMvWWE9gCjA&maxResults=10&type=video&order=date`
      );
      const data = await res.json();

      if (data.items) {
        const durations = await fetch(
          `https://www.googleapis.com/youtube/v3/videos?part=contentDetails&id=${data.items
            .map((item: any) => item.id.videoId)
            .join(",")}&key=AIzaSyAI-1o41MeuYqGwf1_qzRqfVE83r443Ewo`
        );
        const info = await durations.json();

        return data.items
          .filter((item: any) => {
            const duration = info.items.find(
              (inf: any) => inf.id === item.id.videoId
            )?.contentDetails.duration;
            return isDurationGreaterThanOneMinute(duration);
          })
          .slice(0, 3)
          .map((item: any) => ({
            title: he.decode(item.snippet.title),
            thumbnail: item.snippet.thumbnails.high.url,
            url: `https://www.youtube.com/watch?v=${item.id.videoId}`,
          }));
      }
    } catch (err) {
      console.error(err);
      throw new Error(
        "An error occurred while fetching the videos. Please try again later."
      );
    }

    return null;
  };
