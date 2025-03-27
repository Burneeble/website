import { RoundedWrapper } from "@/components";
import {
  BlogHero,
  Discover,
  Latest,
  StayTuned,
  Youtube,
  YoutubeVideo,
} from "@/components/Pages";
import { fetchYoutubeVideos } from "@/lib/recentYoutubeVideos";

const BlogPage = async () => {
  let videos = [] as Array<YoutubeVideo> | null;

  try {
    videos = await fetchYoutubeVideos();
  } catch (err) {
    console.error(err);
    videos = null;
  }

  return (
    <div
      className={`
        blog-page cs-page tw-bg-gradient-to-t tw-from-black
        tw-to-[var(--secondary-base)]
      `}
    >
      <BlogHero />
      <RoundedWrapper>
        <Latest />
        <StayTuned />
        <Discover />
        <Youtube video={videos} className={`cs-bottom-padding-for-footer`} />
      </RoundedWrapper>
    </div>
  );
};

export default BlogPage;
