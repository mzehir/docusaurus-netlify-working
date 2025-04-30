import React, { type ReactNode } from "react";
import MDXContent from "@theme-original/MDXContent";
import type MDXContentType from "@theme/MDXContent";
import type { WrapperProps } from "@docusaurus/types";

type Props = WrapperProps<typeof MDXContentType>;

export default function MDXContentWrapper(props: Props): ReactNode {
  const frontMatter = (props.children as any)?.type?.frontMatter ?? {};
  console.log(frontMatter);

  return (
    <>
      <h1 style={{ backgroundColor: "red", color: "yellow" }}>Lorem Ipsum</h1>
      <MDXContent {...props} />
    </>
  );
}
