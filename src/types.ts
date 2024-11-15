export interface VisitOptions {
  action?: 'push' | 'replace' | 'none'
  emitEvents?: boolean
  isBackForward?: boolean
  merge?: MergeStrategy
}

export type MergeStrategy =
  | 'replace'
  | 'morph'
  | 'before'
  | 'after'
  | 'prepend'
  | 'append'
  | 'update'

export interface Config {
  watchHistory?: boolean
  merge?: MergeStrategy
}

export type EventMap = {
  visit: { url: string }
  'before-visit': { url: string }
  'before-render': { url: string; newDocument: Document }
}
