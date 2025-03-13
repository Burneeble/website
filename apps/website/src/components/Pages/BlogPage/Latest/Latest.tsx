import ArticleBatch, { ArticleBatchVariant } from "@/components/ArticleBatch";
import { LatestProps } from "./Latest.types";

const Latest = (props: LatestProps) => {
  return (
    <section
      className={`
        latest cs-website-vertical-padding tw-flex tw-flex-col
        cs-gap-between-content tw-items-center tw-justify-center
      `}
    >
      <h2 className="title tw-text-center">
        <span className="cs-text-color-primary-gradient">Latest</span> Articles
      </h2>
      <ArticleBatch
        type={ArticleBatchVariant.LATEST}
        limit={3}
        enableSliderResponsiveMode
        variant={"dark"}
      />
    </section>
  );
};

export default Latest;
