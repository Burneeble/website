"use client";

import { Skill } from "./components";
import { SkillsParallaxProps } from "./SkillsParallax.types";

const SkillsParallax = (props: SkillsParallaxProps) => {
  return (
    <div className="skills-parallax">
      <div
        className={`
          skill-info tw-flex tw-items-start tw-justify-center tw-flex-col
          tw-gap-[10px]
        `}
      >
        <h2 className="title">
          <span className="cs-text-color-primary-gradient">
            Shopify Integration
          </span>
          : Headless or Traditional Development
        </h2>
        <p className="text">
          {`As experienced developers, we specialize in seamless Shopify
          integrations that transform your e-commerce experience. Whether you're
          looking to harness the flexibility of a headless architecture or
          prefer the simplicity of a traditional Shopify setup, we’ve got you
          covered.`}
          <br />
          <br />
          {`Our tailored solutions ensure blazing-fast performance, fully
          customized user interfaces, and the scalability to grow with your
          business. We partner with you to build a future-proof platform that
          elevates your brand, providing the freedom to innovate and deliver
          exceptional customer experiences—whatever path you choose`}
        </p>
      </div>
      <div className="skills">
        <div className="skill-wrapper">
          <Skill title="Web Development" categories={[]} />
        </div>
        <div className="skill-wrapper">
          <Skill title="Blockchain" categories={[]} />
        </div>
        <div className="skill-wrapper">
          <Skill title="Saas Application" categories={[]} />
        </div>
        <div className="skill-wrapper">
          <Skill title="Shopify" categories={[]} />
        </div>
      </div>
    </div>
  );
};

export default SkillsParallax;
