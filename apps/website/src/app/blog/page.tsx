import { RoundedWrapper } from "@/components";
import {
  BlogHero,
  Discover,
  Latest,
  StayTuned,
  Youtube,
} from "@/components/Pages";

const BlogPage = async () => {
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
        <Youtube className="cs-bottom-padding-for-footer" />
      </RoundedWrapper>
    </div>
  );
};

export default BlogPage;
