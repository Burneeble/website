"use client";

import {
  CustomScrollbar,
  ReviewCard,
  ReviewCardProps,
  useClientInfoService,
} from "@burneeble/ui-components";
import { CustomersProps } from "./Customers.types";
import { useState } from "react";

const reviews: ReviewCardProps[] = [
  {
    user: {
      name: "John Doe",
      avatar: "https://picsum.photos/40",
      countryCode: "IT",
    },
    rating: 5,
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean nec odio et est faucibus lacinia. Nullam sit amet nisl nec or",
  },
  {
    user: {
      name: "John Doe",
      avatar: "https://picsum.photos/40",
      countryCode: "IT",
    },
    rating: 5,
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean nec odio et est faucibus lacinia. Nullam sit amet nisl nec or",
  },
  {
    user: {
      name: "John Doe",
      avatar: "https://picsum.photos/40",
      countryCode: "IT",
    },
    rating: 5,
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean nec odio et est faucibus lacinia. Nullam sit amet nisl nec or",
  },
  {
    user: {
      name: "John Doe",
      avatar: "https://picsum.photos/40",
      countryCode: "IT",
    },
    rating: 5,
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean nec odio et est faucibus lacinia. Nullam sit amet nisl nec or",
  },
  {
    user: {
      name: "John Doe",
      avatar: "https://picsum.photos/40",
      countryCode: "IT",
    },
    rating: 5,
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean nec odio et est faucibus lacinia. Nullam sit amet nisl nec or",
  },
  {
    user: {
      name: "John Doe",
      avatar: "https://picsum.photos/40",
      countryCode: "IT",
    },
    rating: 5,
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean nec odio et est faucibus lacinia. Nullam sit amet nisl nec or",
  },
  {
    user: {
      name: "John Doe",
      avatar: "https://picsum.photos/40",
      countryCode: "IT",
    },
    rating: 5,
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean nec odio et est faucibus lacinia. Nullam sit amet nisl nec or",
  },
  {
    user: {
      name: "John Doe",
      avatar: "https://picsum.photos/40",
      countryCode: "IT",
    },
    rating: 5,
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean nec odio et est faucibus lacinia. Nullam sit amet nisl nec or",
  },
  {
    user: {
      name: "John Doe",
      avatar: "https://picsum.photos/40",
      countryCode: "IT",
    },
    rating: 5,
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean nec odio et est faucibus lacinia. Nullam sit amet nisl nec or",
  },
  {
    user: {
      name: "John Doe",
      avatar: "https://picsum.photos/40",
      countryCode: "IT",
    },
    rating: 5,
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean nec odio et est faucibus lacinia. Nullam sit amet nisl nec or",
  },
  {
    user: {
      name: "John Doe",
      avatar: "https://picsum.photos/40",
      countryCode: "IT",
    },
    rating: 5,
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean nec odio et est faucibus lacinia. Nullam sit amet nisl nec or",
  },
  {
    user: {
      name: "John Doe",
      avatar: "https://picsum.photos/40",
      countryCode: "IT",
    },
    rating: 5,
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean nec odio et est faucibus lacinia. Nullam sit amet nisl nec or",
  },
  {
    user: {
      name: "John Doe",
      avatar: "https://picsum.photos/40",
      countryCode: "IT",
    },
    rating: 5,
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean nec odio et est faucibus lacinia. Nullam sit amet nisl nec or",
  },
  {
    user: {
      name: "John Doe",
      avatar: "https://picsum.photos/40",
      countryCode: "IT",
    },
    rating: 5,
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean nec odio et est faucibus lacinia. Nullam sit amet nisl nec or",
  },
  {
    user: {
      name: "John Doe",
      avatar: "https://picsum.photos/40",
      countryCode: "IT",
    },
    rating: 5,
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean nec odio et est faucibus lacinia. Nullam sit amet nisl nec or",
  },
  {
    user: {
      name: "John Doe",
      avatar: "https://picsum.photos/40",
      countryCode: "IT",
    },
    rating: 5,
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean nec odio et est faucibus lacinia. Nullam sit amet nisl nec or",
  },
];

const Customers = (props: CustomersProps) => {
  //States
  const phrases = [
    <>
      We have worked on several
      <br />
      requests...
    </>,
    <>Gave advice and indicated the best way...</>,
    <>Worked hard, without stopping and without EVER saying no to you.</>,
    <>We know, there are so many of them...</>,
    <>...but it is only thanks to YOU that we can demonstrate</>,
    <>our passion and quality.</>,
  ];
  const [phraseIndex, setPhraseIndex] = useState<number>(0);

  //Hooks
  const { screen } = useClientInfoService();

  return (
    <section
      className={`
        customers tw-px-5 tw-py-[50px] tw-flex tw-items-center tw-justify-center
        tw-gap-[20px] tw-flex-col tw-relative
      `}
    >
      <h2
        className={`
          tw-text-headings tw-text-2xl tw-font-bowlby-one tw-w-fit tw-mx-auto
        `}
      >
        <strong>Our customers</strong> say...
      </h2>
      <div className="tw-relative tw-max-w-full">
        <div className="shadow tw-left-0" />
        <div className="shadow tw-right-0 tw-rotate-180" />
        <CustomScrollbar
          onScroll={(hProgress: number) => {
            const clampedValue = Math.max(0, Math.min(100, hProgress));
            setPhraseIndex(Math.round((clampedValue / 100) * 6));
          }}
        >
          <div className="tw-py-[20px] tw-w-fit tw-overflow-visible">
            {screen == "sm" || screen == "md" ? (
              <>
                <div className="review-row tw-pl-[177px]">
                  {reviews.slice(0, reviews.length / 2).map((review, i) => {
                    return <ReviewCard key={i} {...review} />;
                  })}
                </div>
                <div className="review-row tw-mt-[20px]">
                  {reviews.slice(reviews.length / 2).map((review, i) => {
                    return <ReviewCard key={i} {...review} />;
                  })}
                </div>
              </>
            ) : (
              <></>
            )}
          </div>
        </CustomScrollbar>
      </div>
      <p
        className={`
          tw-py-[5px] tw-px-[20px] tw-text-end tw-font-inter tw-text-body
          tw-block tw-w-full tw-text-xl
        `}
      >
        {phrases[phraseIndex]}
      </p>
    </section>
  );
};

export default Customers;
