import { article } from './article'
import { event } from './event'

import { siteSettings } from './siteSettings'

export const schemaTypes = [article, event, siteSettings]
export const schema = { types: [article, event, siteSettings] }