import { Metadata } from "next"
import BlogPageTemplate from "@modules/blog/templates/BlogPageTemplate"
import { getBlogsBySlug } from "@lib/data"

export const metadata: Metadata = {
  title: "Blogs",
  description: "Checkout our blogs",
}

export default async function BlogPage({
  params,
}: {
  params: { slug: string }
}) {
  const data = await getBlogsBySlug(params.slug)

  return <BlogPageTemplate blog={data.data} />
}
