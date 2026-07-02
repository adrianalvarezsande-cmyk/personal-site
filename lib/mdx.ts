import remarkGfm from 'remark-gfm'
import rehypePrettyCode from 'rehype-pretty-code'
import type { PluggableList } from 'unified'

/**
 * Shared MDX compile options passed to next-mdx-remote/rsc.
 * Applied on every content page — extend here if new plugins are needed.
 */
export const mdxOptions = {
  mdxOptions: {
    remarkPlugins: [remarkGfm] satisfies PluggableList,
    rehypePlugins: [
      [
        rehypePrettyCode,
        {
          // github-dark-dimmed is softer than github-dark — less harsh
          // against the warm near-black dark mode background.
          theme: 'github-dark-dimmed',
          keepBackground: true,
        },
      ],
    ] satisfies PluggableList,
  },
}
