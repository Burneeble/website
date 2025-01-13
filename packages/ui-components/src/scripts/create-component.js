/* eslint-disable no-undef */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const fs = require("fs");
// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require("path");

const type = process.argv[2];
const compName = process.argv[3];

const compPath = path.join(__dirname, `./../components/${type}/${compName}`);

fs.mkdirSync(compPath);
fs.writeFileSync(
  path.join(compPath, compName + ".tsx"),
  `import React from "react";
import {${compName}Props} from "./${compName}.types";

const ${compName} = (props: ${compName}Props) => {
    return <></>
};

export default ${compName}
`
);
fs.writeFileSync(
  path.join(compPath, compName + ".scss"),
  `// ${compName}
`
);
fs.writeFileSync(
  path.join(compPath, compName + ".types.ts"),
  `/**
* ${compName} props
*/
export interface ${compName}Props {}
`
);
fs.writeFileSync(
  path.join(compPath, "index.ts"),
  `import ${compName} from "./${compName}"
  
export default ${compName};
export {${compName}};
export * from "./${compName}.types";
`
);
fs.writeFileSync(
  path.join(compPath, compName + ".stories.tsx"),
  `import { StoryObj, Meta } from "@storybook/react";
import ${compName} from "./${compName}";
import { ${compName}Props } from "./${compName}.types";
import React from "react";

export default {
  title: "burneeble-website-components/${type}/${compName}",
  component: ${compName},
} as Meta<typeof ${compName}>;

type Story = StoryObj<${compName}Props>;

export const simple${compName}: Story = {
  args: {
   
  },
};
`
);

fs.appendFileSync(
  path.join(compPath, "./../index.ts"),
  `\nexport * from "./${compName}";`
);
fs.appendFileSync(
  path.join(compPath, `./../${type}.scss`),
  `\n@import "./${compName}/${compName}";`
);
