import { Metadata } from "next"
import BlogTemplate from "@modules/blog/templates"
import { getAllBlogs } from "@lib/data"

export const metadata: Metadata = {
  title: "Blogs",
  description: "Checkout our blogs",
}

export default async function BlogPage() {
    const data = await getAllBlogs();

  return (
    <>
      <BlogTemplate blogs={data.data}/>
    </>
  )
}
