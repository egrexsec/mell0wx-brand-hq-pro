import type { MDXComponents } from "mdx/types";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: (props) => <h1 className="hero-title" {...props} />,
    p: (props) => <p className="sub" {...props} />,
    ...components,
  };
}
