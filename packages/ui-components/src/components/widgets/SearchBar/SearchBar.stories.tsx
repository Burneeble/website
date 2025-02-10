import { StoryObj, Meta } from "@storybook/react";
import SearchBar from "./SearchBar";
import { SearchBarProps } from "./SearchBar.types";
import React, { useState } from "react";

export default {
  title: "burneeble-website-components/widget/SearchBar",
  component: SearchBar,
} as Meta<typeof SearchBar>;

type Story = StoryObj<SearchBarProps>;

export const simpleSearchBar: Story = {
  render: () => {
    //States
    const [value, setValue] = useState<string>("");

    return (
      <>
        <SearchBar
          value={value}
          setValue={setValue}
          onChange={(value: string) => {
            console.log(value);
          }}
        />
      </>
    );
  },
};
