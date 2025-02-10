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
        blog-page cs-page tw-from-[black] tw-to-[var(--secondary-base)]
        tw-from-[50%] tw-to-[50%] tw-bg-gradient-to-t
      `}
    >
      <BlogHero />
      <RoundedWrapper>
        <Latest />
        <StayTuned />
        <Discover />
        <Youtube />
      </RoundedWrapper>
    </div>
  );
};

export default BlogPage;
