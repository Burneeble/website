"use client";

import {
  CustomScrollbar,
  ReviewCard,
  ReviewCardProps,
  useClientInfoService,
} from "@burneeble/ui-components";
import { CustomersProps } from "./Customers.types";

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
  //Hooks
  const { screen } = useClientInfoService();

  return (
    <section
      className={`
        customers tw-px-5 tw-py-[50px] tw-flex tw-items-center tw-justify-center
        tw-gap-[20px] tw-flex-col
      `}
    >
      <h2
        className={`
          tw-text-headings tw-text-2xl tw-font-bowlby-one tw-w-fit tw-mx-auto
        `}
      >
        <strong>Our customers</strong> say...
      </h2>
      <CustomScrollbar>
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
    </section>
  );
};

export default Customers;
