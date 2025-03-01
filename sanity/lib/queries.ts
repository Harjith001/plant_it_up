import { defineQuery } from "next-sanity";

export const PLANTU_QUERIES = defineQuery(
    `*[_type == "plantup" && defined(slug.current)] | order(_createdAt desc) {
  _id, 
  title, 
  slug,
  _createdAt,
  author -> {
    _id, name, image, bio
  }, 
  views,
  description,
  category,
  image,
}`
);