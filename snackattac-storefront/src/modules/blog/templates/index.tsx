"use client"
import Hero from "@modules/blog/components/hero"
import BlogListing from "../components/BlogListing"
import { useState } from "react"

const BlogTemplate = ({blogs}) => {
    console.log("parent : :  ", parent)

  return (
    <>
      <Hero />
      <BlogListing blogs={blogs}/>
    </>
  )
}

export default BlogTemplate
