import { groq } from 'next-sanity'

export const articlesQuery = groq`*[_type == "article" && publishedAt <= now()] | order(publishedAt desc) {
  _id,
  title,
  "slug": slug.current,
  excerpt,
  author,
  category,
  publishedAt,
  isBreaking,
  heroImage,
  tags
}`

export const heroArticleQuery = groq`*[_type == "article" && publishedAt <= now()] | order(publishedAt desc)[0] {
  _id,
  title,
  "slug": slug.current,
  excerpt,
  author,
  category,
  publishedAt,
  isBreaking,
  heroImage,
  tags
}`

export const articleBySlugQuery = groq`*[_type == "article" && slug.current == $slug][0] {
  _id,
  title,
  "slug": slug.current,
  excerpt,
  body,
  author,
  category,
  publishedAt,
  isBreaking,
  heroImage,
  tags
}`

export const articlesByCategoryQuery = groq`*[_type == "article" && category == $category && publishedAt <= now()] | order(publishedAt desc) {
  _id,
  title,
  "slug": slug.current,
  excerpt,
  author,
  category,
  publishedAt,
  isBreaking,
  heroImage,
  tags
}`

export const searchArticlesQuery = groq`*[_type == "article" && (title match $query || excerpt match $query || tags[] match $query) && publishedAt <= now()] | order(publishedAt desc) {
  _id,
  title,
  "slug": slug.current,
  excerpt,
  author,
  category,
  publishedAt,
  isBreaking,
  heroImage,
  tags
}`
