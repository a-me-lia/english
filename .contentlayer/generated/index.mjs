// NOTE This file is auto-generated by Contentlayer

export { isType } from 'contentlayer/client'

// NOTE During development Contentlayer imports from `.mjs` files to improve HMR speeds.
// During (production) builds Contentlayer it imports from `.json` files to improve build performance.
import allBlogs from './Blog/_index.json' assert { type: 'json' }
import allMeta from './Meta/_index.json' assert { type: 'json' }
import allFilms from './Film/_index.json' assert { type: 'json' }

export { allBlogs, allMeta, allFilms }

export const allDocuments = [...allBlogs, ...allMeta, ...allFilms]


