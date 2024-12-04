"use client";

import { useClientInfoService } from "@burneeble/ui-components";
import { Skill } from "./components";
import { SkillsParallaxProps } from "./SkillsParallax.types";

const SkillsParallax = (props: SkillsParallaxProps) => {
  //Hooks
  const { screen } = useClientInfoService();

  return (
    <div
      className={`
        skills-parallax tw-w-full tw-flex tw-gap-[10px] tw-flex-col

        md:tw-gap-[30px]

        xl:tw-flex-row xl:tw-gap-[70px] xl:tw-h-[calc(100vh-60px)]
      `}
    >
      <div
        className={`
          skill-info tw-flex tw-items-start tw-justify-center tw-flex-col
          tw-gap-[10px]
        `}
      >
        <h1 className="title">
          <span className="cs-text-color-primary-gradient">
            Shopify Integration
          </span>
          : Headless or Traditional Development
        </h1>
        <p className="text">
          Our tailored solutions ensure blazing-fast performance, fully
          customized user interfaces, and the scalability to grow with your
          business.
          <br />
          <br />
          We partner with you to build a future-proof platform that elevates
          your brand, providing the freedom to innovate and deliver exceptional
          customer experiences.
        </p>
      </div>
      <div
        className={`
          skill-section tw-relative

          xl:tw-min-h-full
        `}
      >
        <div
          className={`
            skills tw-overflow-hidden tw-max-w-full no-scrollbar

            xl:tw-h-full xl:tw-relative xl:tw-overflow-visible
          `}
        >
          <div
            className={`
              wrapper tw-w-[calc(100%*4)] tw-justify-between tw-relative tw-flex
              tw-pb-[30px]

              xl:tw-w-[490px] xl:tw-flex-col xl:tw-pb-0 xl:tw-h-full
            `}
          >
            {[
              "Web Development",
              "Blockchain",
              "Saas Application",
              "Shopify",
            ].map((t, i) => {
              return (
                <div key={i} className={`skill-wrapper tw-flex-1`}>
                  <Skill
                    title={t}
                    categories={[
                      "Custom Development",
                      "Architecture Design",
                      "API Development",
                      "Automation with Scripts",
                      "Optimization & Reliable Code",
                    ]}
                    index={i}
                    currentIndex={1}
                    amount={4}
                  />
                </div>
              );
            })}
          </div>
          {!["sm", "md"].includes(screen) && (
            <div
              className={`
                end-bar tw-absolute tw-h-[8px] tw-w-[50vw] tw-left-[17px]
                tw-bottom-0 tw-bg-[var(--primary-lighest)]
              `}
            />
          )}
        </div>
        {screen === "md" && (
          <div
            className={`
              bar tw-translate-x-[-50%] tw-absolute tw-bottom-0 tw-left-1/2
              tw-h-[8px] tw-bg-[var(--primary-lighest)] tw-w-screen tw-block
            `}
          />
        )}
      </div>
    </div>
  );
};

export default SkillsParallax;
