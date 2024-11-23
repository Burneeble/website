import { AwsIcon, NextJsIcon, StripeIcon } from "@burneeble/icons";
import { TechnologyProps } from "./Technology.types";

const Technology = (props: TechnologyProps) => {
  //Methods
  const getIcon = () => {
    switch (props.technology) {
      case "AWS":
        return <AwsIcon />;
      case "Next.js":
        return <NextJsIcon />;
      case "Stripe":
        return <StripeIcon />;
      default:
        return <>not found</>;
    }
  };

  return (
    <div
      className={`
        technology tw-w-[164.92px] tw-h-[58px] tw-py-[15.27px]
        tw-bg-gradient-to-r tw-from-[var(--primary-default)]
        tw-to-[var(--primary-lighter)] tw-rounded tw-flex-col tw-justify-center
        tw-items-center tw-inline-flex tw-text-[100px]

        md:tw-w-[188.35px] md:tw-h-[62px] md:tw-text-[106px]

        xl:tw-w-[324px] xl:tw-h-[106.06px] xl:tw-text-[152px]
      `}
    >
      {getIcon()}
    </div>
  );
};

export default Technology;
