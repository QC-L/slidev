export interface SlideInfo {
  index: number
  start: number
  end: number
  raw: string
  content: string
  note?: string
  frontmatter: Record<string, any>
  title?: string
}

export interface SlideInfoExtended extends SlideInfo {
  notesHTML: string
}

export interface SlidevConfig {
  title: string
  /**
   * @see https://sli.dev/themes/use.html
   * @defult 'default'
   */
  theme: string
  /**
   * @defult true
   */
  remoteAssets: boolean | 'dev' | 'build'
  /**
   * Enable Monaco
   *
   * @see https://sli.dev/custom/config-monaco.html
   * @defult 'dev'
   */
  monaco: boolean | 'dev' | 'build'
  /**
   * Show a download button in the SPA build,
   * could also be a link to custom pdf
   *
   * @default true
   */
  download: boolean | string
  /**
   * Information shows on the built SPA
   * Can be a markdown string
   *
   * @default true
   */
  info: string | boolean
  /**
   * Prefer highlighter
   *
   * @see https://sli.dev/custom/highlighters.html
   * @default prism
   */
  highlighter: 'prism' | 'shiki'
  /**
   * Force slides color schema
   *
   * @default 'auto'
   */
  colorSchema: 'dark' | 'light' | 'all' | 'auto'
  /**
   * Router mode for vue-router
   *
   * @default 'hash'
   */
  routerMode: 'hash' | 'history'
}

export interface SlidevFeatureFlags {
  katex: boolean
  monaco: boolean
  tweet: boolean
  mermaid: boolean
}

export interface SlidevMarkdown {
  filepath?: string
  slides: SlideInfo[]
  raw: string
  config: SlidevConfig
  features: SlidevFeatureFlags
  headmatter: Record<string, unknown>
}
