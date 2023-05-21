export interface Breadcrumb {
  /** Breadcrumb title. Example: 'blog-entries' */
  breadcrumb: string

  /** The URL which the breadcrumb points to. Example: 'blog/blog-entries' */
  href: string
}

export interface CharacterMap {
  /** The source character or character pattern that should be replaced (e.g. 'ae') */
  from: string

  /** The replacement into which the character should be replaced. */
  to: string
}
